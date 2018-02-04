import React from 'react';
import { render } from 'react-dom';
// The <BrowserRouter> should be used when you have a server that will handle dynamic requests (knows how to respond to any possible URI), while the <HashRouter> should be used for static websites (can only respond to requests for files that it knows about).
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/style.scss';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

// Link(header) needs to be wraped inside a Routere
