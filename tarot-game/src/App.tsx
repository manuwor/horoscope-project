
import './App.scss';

import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import InputPage from './components/input/input';
import PlayingPage from './components/playing/playing';
import ResultPage from './components/result/result';
import LottoComponent from './components/lotto/lotto';
import { useEffect } from 'react';
import Menu1Component from './components/menu_1/menu_1';
function App() {
  const RedirectToExternal = () => {
    useEffect(() => {
      window.open("https://mamoodi.com", "_self")
    }, []);

    return null;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RedirectToExternal />} />
          <Route path="/tarot-1" element={<Menu1Component />} />
          <Route path="/tarot-1/play" element={<PlayingPage />} />
          <Route path="/lotto" element={<LottoComponent />} />
          <Route path="/tarot-1/result" element={<ResultPage />} />
          {/* Wildcard route to catch all undefined paths */}
          <Route path="*" element={<RedirectToExternal />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
