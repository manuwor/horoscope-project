// src/pages/LoginPage.tsx
import React, { useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useAuth } from '../../context/auth-context';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const { user, login } = useAuth(); // Access user and login function from the context
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
        console.log(user);
      // If the user is authenticated, navigate to the article list page
      navigate('/articles-list');
    }
  }, [user, navigate]);

  return (
    <Container className="d-flex vh-100 align-items-center justify-content-center">
      <Row>
        <Col className="text-center">
          <h2>Login with Google</h2>
          <Button onClick={login} variant="primary">
            Login
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
