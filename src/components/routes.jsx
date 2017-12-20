import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Header.jsx'
import App from '../App.jsx';
import About from './About.jsx';
import Home from './Home.jsx';
import Contact from './Contact.jsx';

export default function routes({ giphyArr, giphyCall, contactVis, contactBar, giphyChange }) {
  return (
  <React.Fragment>
  <Header/>
  <Switch>
    <Route exact path='/About' render={()=> <About giphyArr={giphyArr} giphyCall={giphyCall} giphyChange={giphyChange}/>} />
    <Route exact path='/' render={()=> <Home/>} />    
  </Switch>
  <Contact contactVis={contactVis} contactBar={contactBar}/>
  </React.Fragment>
  )
}