import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';


const divRoot = document.querySelector('#root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  divRoot
);

