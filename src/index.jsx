import React from 'react';
import { render } from 'react-dom';
// The <BrowserRouter> should be used when you have a server that will handle dynamic requests (knows how to respond to any possible URI), while the <HashRouter> should be used for static websites (can only respond to requests for files that it knows about).
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App.jsx';
import './styles/style.scss';

function renderComponent(Component) {
render(
  <AppContainer>
  <BrowserRouter>
    <Component />
  </BrowserRouter>
  </AppContainer>,
  document.getElementById('root'),
);
}

renderComponent(App)


if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    const NextApp = require('./App.jsx').default
    renderComponent(NextApp)
  })
  // module.hot.accept();
}
// Seems the App won't refresh it self, so we need to re-import it, also need to make sure import it after(or say inside) the module.hot.accept function call.
