import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Header.jsx'
import App from '../App.jsx';
import About from './About.jsx';
import Home from './Home.jsx';
import Contact from './Contact.jsx';

export default function routes() {
  return (
  <React.Fragment>
  <Header/>
  <Switch>
    <Route exact path='/About' render={()=> <About/>} />
    <Route exact path='/' render={()=> <Home/>} />    
  </Switch>
  <Contact/>
  </React.Fragment>
  )
}