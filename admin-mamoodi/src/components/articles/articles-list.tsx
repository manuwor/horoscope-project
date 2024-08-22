// src/pages/ArticleListPage.tsx
import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../utility/firebase-config';
import "./articles.scss";
import Header from '../header/header';

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
    <div className='articles-control'>
        <Header title="บทความทั้งหมด" isBack={false} />
      <div className='articles-item-control'>
        <div className="justify-content-between my-4">
          
          <Button className='articles-create-button'onClick={createArticle}>
            + สร้างบทความใหม่
          </Button>
        </div>
        <div>
          {articles.map((article) => (
            <div key={article.id} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title className='articles-title-text'>{article.title}</Card.Title>
                  <Card.Text className='articles-desc-text'>{article.shortDescription}</Card.Text>
                  <Button onClick={() => editArtlicle(article.id)} variant="warning">
                    แก้ไข
                  </Button>
                  <Button onClick={() => handleDelete(article.id)} variant="danger" className="ms-2">
                    ลบ
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleListPage;
