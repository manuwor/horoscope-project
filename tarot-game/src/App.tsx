import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from './components/landing/landing';
import InputPage from './components/input/input';
import PlayingPage from './components/playing/playing';
import ResultPage from './components/result/result';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/input" element={<InputPage/>} />
          <Route path="/play" element={<PlayingPage />} />
          <Route path="/result" element={<ResultPage />} />

        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
