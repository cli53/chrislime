import React from 'react';
import Fade from 'react-reveal/Fade';
import Bio from './Bio.jsx'
import Projects from '../projects/Projects.jsx';
import Login from './Login.jsx';
import ErrorBoundary from '../../ErrorBoundary.jsx';
import Email from './Email.jsx';

const Body = () => (
    <React.Fragment>
    <div id='mid-sec'>
    <Fade left>
    <Bio/>
    </Fade>
    </div>
    <article>
    <ErrorBoundary>
    <Projects/>
    </ErrorBoundary>
    </article>
    <Login/>
    </React.Fragment>
);

export default Body;
