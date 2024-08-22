import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import imageCompression from 'browser-image-compression';
import { auth, db } from '../../../utility/firebase-config';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import APIService from '../../../services/api.service';
import "../articles.scss";
import QuillEditor from '../../quill-editor/quill-editor';
import Header from '../../header/header';

const EditArticlePage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');
  const [keywords, setKeywords] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [article, setArticleMod] = useState<any>();
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); // Assuming you use React Router

  useEffect(() => {
    // Fetch the existing article data
    const fetchArticle = async () => {
      if (!id) return;
      const docRef = doc(db, "articles", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const article = docSnap.data();
       
        setTitle(article.title);
        setShortDescription(article.shortDescription);
        setContent(article.content.join('\n'));
        setSlug(article.slug);
        setKeywords(article.keywords.join(','));
        setImageUrl(article.imageUrl);
        setImagePreviewUrl(article.imageUrl); // Show the current image
        setArticleMod(article);
      } else {
        console.error("No such article found!");
      }
    };

    fetchArticle();
  }, [id]);

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
      updatedAt: new Date().toISOString(), // Track update time
    };

    if (auth.currentUser && id) {
      try {
        const docRef = doc(db, "articles", id);
        await updateDoc(docRef, articleData);
        navigate('/');
      } catch (error) {
        console.error("Error updating article:", error);
      }
    } else {
      navigate('/');
    }
  };

  return (
    <div className='articles-control'>
      <Header title="แก้ไขบทความ" isBack={true} />
      {
        article && 
        <div className='articles-item-control'>
        <Form onSubmit={handleSubmit} className='articles-form-control'>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
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
            <QuillEditor value={content} editValue={content} setDefaultValue={setContent} />
          </Form.Group>
          <Form.Group controlId="image" className="mt-3 d-flex flex-column">
            <Form.Label>Share Image</Form.Label>
            {imagePreviewUrl && (
              <div className="articles-img-preview">
                <img src={imagePreviewUrl} className='articles-img-preview' alt="Preview" />
              </div>
            )}
            <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
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
          <Button type="submit" variant="primary" className="mt-4">
            Update
          </Button>
        </Form>
      </div>
      }
      
    </div>
  );
};

export default EditArticlePage;
