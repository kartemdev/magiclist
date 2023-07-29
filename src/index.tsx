import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import './index.scss';
import './variables.scss'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
