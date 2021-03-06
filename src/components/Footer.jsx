import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Footer({ contactVis, contactBar }) {
  return (
    <footer>
      <ul id='footer-links'>
        <li><a className='footer-url' href='https://www.linkedin.com/in/chrisdigitiali/' target='_blank'>Linkedin</a></li>
        <li><a className='footer-url' href='https://github.com/cli53' target='_blank'>Github</a></li>
        <li><NavLink to='/contact'>Ask me your questions!</NavLink></li>
      </ul>
      <p id='copyright'>&copy; Chris Li. All rights reserved</p>
    </footer>
  );
}

Footer.propTypes = {
  contactVis: PropTypes.bool,
  contactBar: PropTypes.func,
};


{/* <div id="contact-contain" onClick={contactBar} className={contactVis ? 'slideOut' : 'slideIn'}>
<p id="contact">Contact</p>
<div id="info-box">
  <p>LINKEDIN:<span className="contacts-info"><a href="https://www.linkedin.com/in/chrisdigitiali/" target="_blank">CHRISDIGITALI</a></span></p>
  <p>EMAIL: <span className="contacts-info"><a href="mailto:chrisli@codesmith.io?Subject=Hi%20Chris!">chrisli@codesmith.io</a></span></p>
</div>
</div> */}