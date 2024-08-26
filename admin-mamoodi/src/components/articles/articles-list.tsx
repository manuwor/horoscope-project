// src/pages/ArticleListPage.tsx
import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../utility/firebase-config';
import "./articles.scss";
import Header from '../header/header';
import { Article } from '../../model/article.model';



const ArticleListPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(articles);
  },[articles]);
  useEffect(() => {

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
  const convertThDate = (dateString: string): string => {
    const date = new Date(dateString);
    const thaiDateTime = date.toLocaleString('th-TH', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    });

    return thaiDateTime;
  }
  return (
    <div className='articles-control'>
      <Header title="บทความทั้งหมด" isBack={false} />
      <div className='articles-item-control'>
        <div className="justify-content-between my-4">

          <Button className='articles-create-button' onClick={createArticle}>
            + สร้างบทความใหม่
          </Button>
        </div>
        <div>
          {articles.sort((a, b) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          }).map((article: Article, index: number) => (
            <div key={article.id} className="mb-4">
              <Card>
                <Card.Body className='d-flex flex-column'>
                  <span className='article-item-status'>{article.status}</span>
                  <Card.Text className='articles-desc-text'>โพสต์วันที่ {convertThDate(article.createdAt)} {article.viewCount && "("+article.viewCount+")"}</Card.Text>
                  <Card.Title className='articles-title-text'>{article.title}</Card.Title>
                  <Card.Text className='articles-desc-text'>{article.shortDescription}</Card.Text>
                  <div className='d-flex'>
                    <Button onClick={() => editArtlicle(article.id)} variant="warning">
                      แก้ไข
                    </Button>
                    <Button onClick={() => handleDelete(article.id)} variant="danger" className="ms-2">
                      ลบ
                    </Button>
                  </div>
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
