
import React from 'react';
import CSX from './CSX.jsx';
import FCS from './FCS.jsx';
import Helium from './Helium.jsx';
import Fade from 'react-reveal/Fade';
import ErrorBoundary from '../../ErrorBoundary.jsx';

const Projects = () => {
  return (
    <ErrorBoundary>
    <section id='projects-sec' className='sec-pad'>
      <p className='header-one'>Recent projects:</p>
      <Fade bottom>
       {/* <Fade top cascade> */}
      <Helium/>
      </Fade>
      <Fade bottom>
      <CSX/>
      </Fade>
    </section>
    </ErrorBoundary>
  )
}

export default Projects;

//Incorporate each project