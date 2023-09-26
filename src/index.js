import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*
        1.Always remember everything related to React Router should come inside Browser Router.
        2.Otherwise the page will crash.
  */
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

