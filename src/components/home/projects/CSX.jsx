import React from 'react';
import csxLogo from '../../../../assets/csx/csxlogo.png';
import Fade from 'react-reveal/Fade';

const CSX = () => {
  return (
  <article id='CSX-article'>
  <Fade bottom>
  <p className='project-title'><span><img className='project-logo'src={csxLogo}></img></span><a href="https://csx.codesmith.io">CSX Web & Mobile Learning Platform</a></p>
  </Fade>
  <p className='article-des'>CSX is a programming education web application built with React and Redux.  The platform focuses analytical problem-solving and technical communication at the heart of the learning process - the most valued capacities of a software engineer. The application centers on the contemporary technologies that fit the goals of our product - React, Redux, Node, Webpack and Docker.</p>
  </article>
  )
}

export default CSX;