import React from 'react';

export default function Contact({ contactVis, contactBar }) {
  return (
    <div id='contact-contain' onClick={contactBar} className={contactVis ? 'slideIn' : 'slideOut'}>
      <p id='contact'>Contact</p>
      <div id='info-box'>
      <p>LINKEDIN:<span className="contacts-info"><a href='https://www.linkedin.com/in/chrisdigitiali/' target='_blank'>CHRISDIGITALI</a></span></p>
      <p>EMAIL: <span className="contacts-info"><a href='mailto:chrisli@codesmith.io?Subject=Hi%20Chris!'>chrisli@codesmith.io</a></span></p>
      {/* <p>LINKEDIN:<span className="contacts-info">https://www.linkedin.com/in/chrisdigitiali/</span></p> */}
      </div>
      </div>
  )
}