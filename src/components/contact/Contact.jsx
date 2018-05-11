/*
 * Filename: /Users/student/Documents/Projects/chrisme/src/components/contact/contact.jsx
 * Path: /Users/student/Documents/Projects/chrisme
 * Created Date: Wednesday, April 4th 2018, 10:20:22 pm
 * Author: cl
 * 
 * Copyright (c) 2018 Your Company
 */

import React, { Component } from 'react';
import Form from './Form.jsx';
import Mail from '../../../assets/misc/contactmail.png';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    // resets the page to the top
    componentDidMount() {
        window.scrollTo(0, 0);
      }

    render() { 
        const pageStyle = {

        }
        return ( 
            <section id='contact'>
            <div id='contact-full'>
            <div id='contact-banner'>
            <h1 id='contact-header'>Contact Me</h1>
            <p>Your questions and special request are always welcome.</p>
            <img id='contact-header-img' src={Mail} alt="mail"/>
            </div>
            <Form/>
            </div>
            </section>
         )
    }
}
 
export default Contact;