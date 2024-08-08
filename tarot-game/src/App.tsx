import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import LandingComponent from './components/landing/landing';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingComponent />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
