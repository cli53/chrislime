import React from 'react';
import portrait from '../../../images/portrait.jpg';

const Info = () => {
    return (
    <div id='info'>
    <img src={portrait} alt="portrait" id="info-portrait"/>
    <p class="info-p">Chris is a software engineer, speaker, and writer located in the heart of New York City! He specializes in modular React/Redux applications with functional programming and scalable server design. Chris is passionate about creating Web and Mobile experiences that look and function beautifully while enforcing modern accessibility practices. </p>
    <p class="info-p">You will often find him happiest working on multidisciplinary teams, maneuvering through product development and technical challenges, and most importantly, envisioning experiences that delight his users. </p>
    </div>
    );
}
export default Info;