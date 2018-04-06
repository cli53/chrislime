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

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section id='contact'>
            <h1>Contact</h1>
            <p>Your questions and special request are always welcome</p>
            <Form/>
            </section>
         )
    }
}
 
export default Contact;