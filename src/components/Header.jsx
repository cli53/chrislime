import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

export default function Nav() {
  return (
    <React.Fragment>
    <ul id='nav-contain'>
      <li className='nav' key={1}>
        <NavLink className='nav' exact={true} to='/'><img className='img' id='logo' src={logo} alt ='logo' title='Chris Li'/></NavLink>
      </li>
      <li className='nav' key={2}>
        <NavLink className='nav' id='About' exact={true} to='/About'>About</NavLink>
      </li>
    </ul>
    </React.Fragment>
  )
};

//Webpack you need to require images in order for Webpack to process them, which would explain why external images load while internal do not, so instead of <img src={"/images/resto.png"} /> you need to use <img src={require('/images/image-name.png')} /> replacing image-name.png w/ the correct image for each of them. 
//That way Webpack is able to process and replace the source img.
