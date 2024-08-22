
import './App.scss';

import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";

import { useEffect } from 'react';
import { AuthProvider, useAuth } from './context/auth-context';
import LoginPage from './components/login/login';
import ArticleListPage from './components/articles/articles-list';
import CreateArticlePage from './components/articles/create/create-article';
import EditArticlePage from './components/articles/edit/edit-article';
function App() {

  const { user } = useAuth();
  return (
    <div className="App">
      <BrowserRouter>
      
          <Routes>
            {!user ? (
              <Route path="/" element={<LoginPage />} />
            ) : (
              <>
                <Route path="/articles-list" element={<ArticleListPage />} />
                <Route path="/create" element={<CreateArticlePage />} />
                <Route path="/edit/:id" element={<EditArticlePage />} />
              </>
            )}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
