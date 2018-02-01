import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// BrowserRouter does is it allows React Router to pass the app’s routing information down to any child component it needs (via context).
// When the app’s location matches a certain path, Route will render a specified component, when it doesn’t, it will render null.
import Header from './Header.jsx'
import About from './about/About.jsx';
import Home from './home/Home.jsx';
import Secret from './Secret.jsx';
import Footer from './Footer.jsx';

export default function routes({ giphyArr, giphyCall, contactVis, contactBar, giphyChange }) {
  return (
  <React.Fragment>
  <main id='main-frame'>
  <Header/>
  <Switch>
  {/* When React Router renders a component, it passes that component three things: match, location, and history. */}
  {/* When the app’s location matches a certain path, Route will render a specified component, when it doesn’t, it will render null.  */}
    <Route path="/About" render={()=> <About giphyArr={giphyArr} giphyCall={giphyCall} giphyChange={giphyChange} />} />
    <Route path="/Secret" render={()=> <Secret />} />
    <Route exact path="/" render={()=> <Home />} />
  </Switch>
  </main>
  <Footer contactVis={contactVis} contactBar={contactBar}/>
  </React.Fragment>
  )
}