import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hero from './pages/HeroPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hero />
  </React.StrictMode>
);
