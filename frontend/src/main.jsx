import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element "#root" was not found in index.html');
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </StrictMode>,
);
