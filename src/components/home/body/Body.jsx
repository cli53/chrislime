import React from 'react';
import Bio from './Bio.jsx'
import Projects from '../projects/Projects.jsx';
import Login from './Login.jsx';
import ErrorBoundary from '../../ErrorBoundary.jsx';
import Email from './Email.jsx';

const Body = () => {
  return (
    <React.Fragment>
    <div id='mid-sec'>
    <Bio/>
    </div>
    <main>
    <ErrorBoundary>
    <Projects/>
    <Login/>
    </ErrorBoundary>
    </main>
    </React.Fragment>
)
};

export default Body;
