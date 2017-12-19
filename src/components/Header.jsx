import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return [
    <ul id='nav-contain'>
      <li className='nav' key={1}>
        <NavLink className='nav' exact={true} to='/'>Logo</NavLink>
      </li>
      <li className='nav' key={2}>
        <NavLink className='nav' exact={true} to='/About'>About</NavLink>
      </li>
    </ul>
  ]
}
