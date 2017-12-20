import React from 'react';

export default function Contact({ contactVis, contactBar }) {
  return (
    <div id='contact-contain' onClick={contactBar} className={contactVis ? 'slideIn' : 'slideOut'}>
      <h3 id='contact'>Contact</h3>
      </div>
  )
}