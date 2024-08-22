// src/pages/EditArticlePage.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../../utility/firebase-config';
import QuillEditor from '../../quill-editor/quill-editor';
import "../articles.scss";
import APIService from '../../../services/api.service';
import Header from '../../header/header';

const EditArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');
  const [keywords, setKeywords] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      if (id) {
        const docRef = doc(db, 'articles', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const article = docSnap.data();
          setTitle(article.title);
          setShortDescription(article.shortDescription);
          setContent(article.content.join('\n'));
          setSlug(article.slug);
          setKeywords(article.keywords.join(','));
        } else {
          console.log('No such document!');
        }
      }
    };
    fetchArticle();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (id) {
      const articleData = {
        title,
        shortDescription,
        urlPath: title.toLowerCase().replace(/\s+/g, '-'),
        content: content.split('\n'),
        slug,
        keywords: keywords.split(','),
        createdAt: new Date().toISOString(),
      };
      if (auth.currentUser) {
        const IDToken = auth.currentUser?.getIdToken(true);
        IDToken.then((idTok) => {
          if (idTok) {
            APIService().updateArticles(id, articleData, idTok).then((res: any) => {
              console.log(res);
              try {
                if (res.status == 200) {
                  navigate('/');
                }
              } catch (error) {

              }
            })
          } else {
            navigate('/');
          }


        })

      } else {
        navigate('/');
      }
    }
  };

  return (
    <div className='articles-control'>
      <Header title="แก้ไขบทความ" isBack={true} />
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
          <Form.Group controlId="content" className="mt-3">
            <Form.Label>Content</Form.Label>
            <QuillEditor value={content} onChange={setContent} setDefaultValue={setContent} />
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
            Save Changes
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditArticlePage;
