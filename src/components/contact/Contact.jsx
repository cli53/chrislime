/*
 * Filename: /Users/student/Documents/Projects/chrisme/src/components/contact/contact.jsx
 * Path: /Users/student/Documents/Projects/chrisme
 * Created Date: Wednesday, April 4th 2018, 10:20:22 pm
 * Author: cl
 * 
 * Copyright (c) 2018 Your Company
 */

import React, { Component, Fragment } from 'react';
import Form from './Form.jsx';
import Mail from '../../../assets/misc/contactmail.png';
import Info from './Info.jsx';
import { LightSpeed } from 'react-reveal';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sent: false,
          }
    }
    // resets the page to the top
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    
    handleSubmit = () => {
        this.setState({ sent: !this.state.sent });
    }

    render() { 
        const sentMessage = this.state.sent;
        return (
            <Fragment>
            <LightSpeed left opposite when={!this.state.sent}>
            <section id='contact'>
            <div id='contact-full'>
            <div id='contact-banner'>
            <h1 id='contact-header'>Contact Me</h1>
            <p>Your questions and special request are always welcome.</p>
            <img id='contact-header-img' src={Mail} alt="mail"/>
            </div>
            <Form sent={sentMessage} handleSubmit={this.handleSubmit}/>
            </div>
            </section>
            </LightSpeed>
            <Info/>
            </Fragment> 
         )
    }
}
 
export default Contact;