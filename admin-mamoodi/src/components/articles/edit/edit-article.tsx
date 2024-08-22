// src/pages/EditArticlePage.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../utility/firebase-config';

const EditArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const [conclusion, setConclusion] = useState('');
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
          setConclusion(article.conclusion);
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
      const docRef = doc(db, 'articles', id);
      await updateDoc(docRef, {
        title,
        shortDescription,
        content: content.split('\n'),
        conclusion,
        keywords: keywords.split(','),
      });
      navigate('/');
    }
  };

  return (
    <Container>
      <h2>Edit Article</h2>
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
          Save Changes
        </Button>
      </Form>
    </Container>
  );
};

export default EditArticlePage;
