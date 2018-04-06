/*
 * Filename: /Users/student/Documents/Projects/chrisme/src/components/contact/Form.jsx
 * Path: /Users/student/Documents/Projects/chrisme
 * Created Date: Wednesday, April 4th 2018, 11:23:50 pm
 * Author: cl
 * 
 * Copyright (c) 2018 Your Company
 */

import React from 'react';

const Form = () => {
    return (
        <form id="contact-form" action="https://formspree.io/licmike75@gmail.com" method="POST">
            <input type="text" name="_gotcha" style={{display:"none"}} />
            <input type="text" name="name" placeholder="Full Name"/>
            <input type="text" name="phone" placeholder="Phone Number" />
            <input type="email" name="_replyto" placeholder="email"/>
            <textarea name="textarea" placeholder="Leave a message"></textarea>
            <input type="submit" value="Send"/>
        </form>
    )
}
 
export default Form;