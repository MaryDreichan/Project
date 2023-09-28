import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/vars.scss';
import './style/App.scss';
import './style/index.scss';
import './style/template.scss';
import './pages/Card/cards.module.scss';
import App from './App';
import { WordProvider } from './pages/Card/WordContex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WordProvider>
    <App />
  </WordProvider>
);