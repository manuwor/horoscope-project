// src/pages/CreateArticlePage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../../../utility/firebase-config';
import APIService from '../../../services/api.service';
import "../articles.scss";
import QuillEditor from '../../quill-editor/quill-editor';
import Header from '../../header/header';

const CreateArticlePage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');
  const [keywords, setKeywords] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
      IDToken.then((id) => {
        if (id) {
          APIService().postArticle(articleData, id).then((res: any) => {
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



  };

  return (
    <div className='articles-control'>
       <Header title="สร้างบทความ" isBack={true} />
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
            <QuillEditor value={content} onChange={setContent} setDefaultValue={setContent} />
          
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
            Save
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateArticlePage;
