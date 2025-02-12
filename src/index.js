import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import AppReglas from './reglasOperacion/index';
// import './style.css';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/reglas-operacion" element={<AppReglas />} />
    </Routes>
  </Router>
);
