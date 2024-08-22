// src/pages/LoginPage.tsx
import React, { useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useAuth } from '../../context/auth-context';
import { useNavigate } from 'react-router-dom';
import "./login.scss";

const LoginPage: React.FC = () => {
  const { user, login } = useAuth(); // Access user and login function from the context
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
        console.log(user);
      // If the user is authenticated, navigate to the article list page
      navigate('/articles-list');
    }
  }, [user]);

  return (
    <div  className="login-control">
      <div className='login-item-control'>
        <Col className="text-center">
          <h2 className='login-title'>Login with Google</h2>
          <Button onClick={login} className='login-button'>
            เข้าสู่ระบบ
          </Button>
        </Col>
      </div>
    </div>
  );
};

export default LoginPage;
