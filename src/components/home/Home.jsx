import React from 'react';
import Hero from './hero/Hero.jsx';
import Body from './body/Body.jsx';

export default function Home() {
  return (
  <React.Fragment>
  <div id='background'></div>
  <Hero/>
  <Body/>
  </React.Fragment>
  );
}