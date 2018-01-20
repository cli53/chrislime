import React from 'react';

export default function Contact({ contactVis, contactBar }) {
  return (
    <div id='contact-outter'>
    <div id='contact-contain' onClick={contactBar} className={contactVis ? 'slideIn' : 'slideOut'}>
      <p id='contact'>Contact</p>
      <div id='info-box'>
      <p>PHONE:<span className="contacts-info">(646)623-5883</span></p>
      <p>EMAIL: <span className="contacts-info">licmike75@gmail.com</span></p>
      {/* <p>LINKEDIN:<span className="contacts-info">https://www.linkedin.com/in/chrisdigitiali/</span></p> */}
      </div>
      </div>
    </div>
  )
}