import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Header.jsx'
import App from '../App.jsx';
import About from './About.jsx';
import Home from './Home.jsx';

export default function routes() {
  return [
  <Header/>,
  <Switch>
    <Route exact path='/about' render={()=> <About/>} />
    <Route exact path='/' render={()=> <Home/>} />    
  </Switch>
  ]
}