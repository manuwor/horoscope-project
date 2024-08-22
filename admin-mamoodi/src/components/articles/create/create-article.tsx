// src/pages/CreateArticlePage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../../../utility/firebase-config';
import APIService from '../../../services/api.service';

const CreateArticlePage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const [conclusion, setConclusion] = useState('');
  const [keywords, setKeywords] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const articleData = {
      title,
      shortDescription,
      urlPath: title.toLowerCase().replace(/\s+/g, '-'),
      content: content.split('\n'),
      conclusion,
      keywords: keywords.split(','),
      createdAt: new Date().toISOString(),
    };
    if(auth.currentUser){
        const IDToken = auth.currentUser?.getIdToken(true);
        IDToken.then((id) => {
            if(id){
                APIService().postArticle(articleData, id).then((res) => {
                    console.log(res);
                })
            }else{
                navigate('/');
            }
          

        })
       
    }else{
        navigate('/');
    }
   

   
  };

  return (
    <Container>
      <h2>Create New Article</h2>
      <Form onSubmit={handleSubmit}>
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
          <Form.Control
            as="textarea"
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="conclusion" className="mt-3">
          <Form.Label>Conclusion</Form.Label>
          <Form.Control
            type="text"
            value={conclusion}
            onChange={(e) => setConclusion(e.target.value)}
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
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default CreateArticlePage;
