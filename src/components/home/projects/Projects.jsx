
import React from 'react';
import CSX from './CSX.jsx';
import FCS from './FCS.jsx';
import Helium from './Helium.jsx';
import ErrorBoundary from '../../ErrorBoundary.jsx';

const Projects = () => {
  return (
    <ErrorBoundary>
    <section id='projects-sec' className='sec-pad'>
      <p className='header-one'>Most Recent Project:</p>
      <Helium/>
      {/* <FCS/> */}
      <CSX/>
    </section>
    </ErrorBoundary>
  )
}

export default Projects;

//Incorporate each project