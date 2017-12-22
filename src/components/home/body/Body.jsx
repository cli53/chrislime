import React from 'react';
import Bio from './Bio.jsx'
import Projects from '../projects/Projects.jsx';
import Login from './Login.jsx';
import ErrorBoundary from '../../ErrorBoundary.jsx';

const Body = () => {
  return (
    <React.Fragment>
    <ErrorBoundary>
    <Bio/>
    <Projects/>
    <Login/>
    </ErrorBoundary>
    </React.Fragment>
    
)
};

export default Body;
