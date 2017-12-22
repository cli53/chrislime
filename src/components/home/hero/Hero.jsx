import React from 'react';
import Intro from './Intro.jsx';
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down';

//In the Home
const Hero = () => {
  return (
    <div id='hero'>
    <Intro key='intro'/>
    <div class ='arrow-bounce'>
    <a href='#body-bio' className='fa fa-arrow-down fa-2x'><FaAngleDoubleDown id='scrollDownArr' /></a>
    </div>
    </div>
  )
}

export default Hero;