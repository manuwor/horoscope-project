// src/pages/ArticleListPage.tsx
import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../utility/firebase-config';

interface Article {
  id: string;
  title: string;
  shortDescription: string;
  createdAt: string;
}

const ArticleListPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("test");
    const fetchArticles = async () => {
      const querySnapshot = await getDocs(collection(db, 'articles'));
      setArticles(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Article)));
    };
    fetchArticles();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, 'articles', id));
    setArticles(articles.filter((article) => article.id !== id));
  };

  const createArticle = () => {
    navigate("/create");
  }
  const editArtlicle = (id) => {
    navigate(`/edit/${id}`);
  }
  return (
    <Container>
      <Row className="justify-content-between my-4">
        <Col>
          <h2>Articles</h2>
        </Col>
        <Col className="text-end">
          <Button  variant="primary" onClick={createArticle}>
            Create New Article
          </Button>
        </Col>
      </Row>
      <Row>
        {articles.map((article) => (
          <Col key={article.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.shortDescription}</Card.Text>
                <Button  onClick={() => editArtlicle(article.id)} variant="warning">
                  Edit
                </Button>
                <Button onClick={() => handleDelete(article.id)} variant="danger" className="ms-2">
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ArticleListPage;
