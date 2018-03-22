import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import github from '../../assets/social/github.svg';
import linkedin from '../../assets/social/linkedin.svg';
import gmail from '../../assets/social/gmail.svg';

export default function Nav() {
  return (
    <React.Fragment>
      <ul id="nav-contain">
        <li id='left-header' className="nav" key={1}>
          <NavLink className="nav" to="/">
            <img className="img" id="logo" src={logo} alt="logo" title="Chris Li" />
          </NavLink>
        </li>
        <li id='right-header' className="nav" key={2}>
          <div id='right-icons'>
          <a href='https://github.com/cli53' target='_blank'><img className="nav header-icons"src={github} alt="github"/></a>


          <a href='https://www.linkedin.com/in/chrisdigitiali/' target='_blank'><img className="nav header-icons" src={linkedin} alt="linkedin"/></a>


          <a href='mailto:chrisli@codesmith.io?Subject=Hi%20Chris!' target='_blank'><img className="nav header-icons" src={gmail} alt="gmail"/></a>
          {/* <NavLink className="nav" id="About" to="/About">About</NavLink> */}
          </div>
        </li>
      </ul>
    </React.Fragment>
  );
}

//  Webpack you need to require images in order for Webpack to process them, which would explain why external images load while internal do not, so instead of <img src={"/images/resto.png"} /> you need to use <img src={require('/images/image-name.png')} /> replacing image-name.png w/ the correct image for each of them. 
//  That way Webpack is able to process and replace the source img.
