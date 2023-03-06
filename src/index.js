import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';

import loginForm from './pages/loginForm';
import Main from './pages/welcomeForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
