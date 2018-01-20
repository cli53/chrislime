import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/style.scss';

ReactDOM.render(
  <BrowserRouter history={history}>
  <App/>
  </BrowserRouter>,
  document.getElementById('root')
)

