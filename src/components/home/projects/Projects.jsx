import React from 'react';
import FF from './FF.jsx';
import FCS from './FCS.jsx';
import Helium from './Helium.jsx';
import ErrorBoundary from '../../ErrorBoundary.jsx';

const Projects = () => {
  return (
    <ErrorBoundary>
    <section id='projects-sec'>
      <Helium/>
      <FCS/>
      <FF/>
    </section>
    </ErrorBoundary>
  )
}

export default Projects;

//Incorporate each project