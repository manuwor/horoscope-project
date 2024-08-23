import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import imageCompression from 'browser-image-compression';
import { auth, db, firebaseApp } from '../../../utility/firebase-config';
import APIService from '../../../services/api.service';
import "../articles.scss";
import QuillEditor from '../../quill-editor/quill-editor';
import Header from '../../header/header';
import { fileURLToPath } from 'url';
import { getGenerativeModel, getVertexAI, HarmBlockMethod, HarmBlockThreshold, HarmCategory, SafetySetting } from '@firebase/vertexai-preview';
import { ContentModel } from '../../../model/content.model';

const CreateArticlePage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');
  const [keywords, setKeywords] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [status, setStatus] = useState('Draft');
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file: File) => {
    if (!auth.currentUser) {
      console.error('User is not authenticated. Cannot upload image.');
      return null;
    }

    try {
      const storage = getStorage();
      const storageRef = ref(storage, `images/${Date.now()}_${file.name}`);
      const compressedFile = await imageCompression(file, {
        maxSizeMB: 0.09, // 90KB max
        maxWidthOrHeight: 800, // Adjust as necessary
        useWebWorker: true,
      });

      const snapshot = await uploadBytes(storageRef, compressedFile);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let imageURL = imageUrl;

    if (imageFile) {
      imageURL = await uploadImage(imageFile);
      if (!imageURL) {
        alert('Image upload failed. Please try again.');
        return;
      }
    }

    const articleData = {
      title,
      shortDescription,
      urlPath: title.toLowerCase().replace(/\s+/g, '-'),
      content: content.split('\n'),
      slug,
      keywords: keywords.split(','),
      imageUrl: imageURL,
      status,
      createdAt: new Date().toISOString(),
    };

    if (auth.currentUser) {
      const IDToken = auth.currentUser?.getIdToken(true);
      IDToken.then((id) => {
        if (id) {
          APIService().postArticle(articleData, id).then((res: any) => {
            console.log(res);
            try {
              if (res.status == 200) {
                navigate('/');
              }
            } catch (error) {
              alert(error);
              console.error(error);
            }
          });
        } else {
          navigate('/');
        }
      });
    } else {
      navigate('/');
    }
  };


  const generationConfig = {
    temperature: 1,
    topP: 0.1,
    topK: 16,
    maxOutputTokens: 1000,
    responseMimeType: "application/json",
  };

  const gencontentAI = async () => {

    // Initialize the Vertex AI service
    const vertexAI = getVertexAI(firebaseApp);
    const safetySettings: SafetySetting[] = [

      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
        method: HarmBlockMethod.HARM_BLOCK_METHOD_UNSPECIFIED
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
        method: HarmBlockMethod.HARM_BLOCK_METHOD_UNSPECIFIED
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
        method: HarmBlockMethod.HARM_BLOCK_METHOD_UNSPECIFIED
      }
    ];

    if (title) {
      const model = getGenerativeModel(vertexAI, { model: "gemini-1.5-flash", safetySettings: safetySettings, generationConfig });
      const prompt = `ฉันอยากได้คอนเท้นเกี่ยวกับ ${title} ช่วยคิดคอนเท้น พร้อม SEO (Title, description, keyword, slug) ให้หน่อยได้ไหม, Return only JSON format from this properties
  (title, description (เป็น HTML format และอย่างน้อย 5 ย่อหน้า ย่อหน้าละ 1000 คำ), keywords (comma format) string, slug, short_description )`
      // To stream generated text output, call generateContentStream with the text input
      const result = await model.generateContent(prompt);
      const jsonObject = JSON.parse(result.response.text()) as ContentModel;
      console.log(jsonObject);
      if(jsonObject.title){
        setTitle(jsonObject.title)
      }
      if(jsonObject.description){
        setContent(jsonObject.description);
      }

      if(jsonObject.short_description){
        setShortDescription(jsonObject.short_description);
      }

      if(jsonObject.keywords){
        setKeywords(jsonObject.keywords)
      }

      if(jsonObject.slug){
        setSlug(jsonObject.slug)
      }
    }

  }

  return (
    <div className='articles-control'>
      <Header title="สร้างบทความ" isBack={true} />
      <div className='articles-item-control'>
        <Form onSubmit={handleSubmit} className='articles-form-control'>
          <Form.Group controlId="title">
            <div className='d-flex'>
              <Form.Label>Title</Form.Label>
              <Button className='article-ai-button' onClick={gencontentAI}>ใช้ AI</Button>
            </div>

            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="shortDescription" className="mt-3">
            <Form.Label>Short Description</Form.Label>
            <Form.Control
              type="text"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="keywords" className="mt-3">
            <Form.Label>Keywords (comma separated)</Form.Label>
            <Form.Control
              type="text"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="slug" className="mt-3">
            <Form.Label>Slug</Form.Label>
            <Form.Control
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="content" className="mt-3">
            <Form.Label>Content</Form.Label>
            <QuillEditor value={content} editValue={""} setDefaultValue={setContent} />
          </Form.Group>
          <Form.Group controlId="image" className="mt-3 d-flex flex-column">
            <Form.Label>Share Image</Form.Label>
            {imagePreviewUrl && (
              <div className="articles-img-preview">
                <img src={imagePreviewUrl} className='articles-img-preview' />
              </div>
            )}
            <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
          </Form.Group>
          <Form.Group controlId="status" className="mt-3">
            <Form.Label>Status</Form.Label>
            <Form.Select value={status} onChange={(e) => setStatus(e.target.value)} required>
              <option value="Draft">Draft</option>
              <option value="Publish">Publish</option>
              <option value="Archived">Archived</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit" variant="primary" className="mt-4">
            Save
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateArticlePage;
