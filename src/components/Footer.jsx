import React from 'react';
import PropTypes from 'prop-types';

export default function Footer({ contactVis, contactBar }) {
  return (
    <footer>
      <ul id='footer-links'>
        <li>linkedin</li>
        <li>Github</li>
        <li>Ask me your questions!</li>
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