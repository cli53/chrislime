import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
// BrowserRouter does is it allows React Router to pass the app’s routing information down to any child component it needs (via context).
// When the app’s location matches a certain path, Route will render a specified component, when it doesn’t, it will render null.
import About from './about/About.jsx';
import Home from './home/Home.jsx';
import fourOFour from './404.jsx';

export default function routes() {
  return (
        <Switch>
          {/* When React Router renders a component, it passes that component three things: match, location, and history. */}
          {/* When the app’s location matches a certain path, Route will render a specified component, when it doesn’t, it will render null.  */}
          <Route path="/About" component={About} />
          <Route exact path="/" component={Home} />
          <Route component={fourOFour} />
        </Switch>
  );
}
