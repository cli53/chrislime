import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Header.jsx'
import App from '../App.jsx';
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
    <Route exact path='/About' render={()=> <About giphyArr={giphyArr} giphyCall={giphyCall} giphyChange={giphyChange}/>} />
    <Route exact path='/Secret' render={()=> <Secret/>}/>
    <Route exact path='/' render={()=> <Home/>} />    
  </Switch>
  </main>
  <Footer contactVis={contactVis} contactBar={contactBar}/>
  </React.Fragment>
  )
}