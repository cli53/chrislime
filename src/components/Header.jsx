import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <React.Fragment>
    <ul id='nav-contain'>
      <li className='nav' key={1}>
        <NavLink className='nav' exact={true} to='/'><img id='logo' src={require('../../images/logo.png')} alt ='logo'/></NavLink>
      </li>
      <li className='nav' key={2}>
        <NavLink className='nav' id='About' exact={true} to='/About'>About</NavLink>
      </li>
    </ul>
    </React.Fragment>
  )
}
