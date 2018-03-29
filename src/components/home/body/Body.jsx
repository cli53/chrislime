import React from 'react';
import Fade from 'react-reveal/Fade';
import Bio from './Bio.jsx'
import Personal from './Personal.jsx';
import Projects from '../projects/Projects.jsx';
import Footer from '../../Footer.jsx';
import Login from './Login.jsx';
import ErrorBoundary from '../../ErrorBoundary.jsx';
import Email from './Email.jsx';

const Body = () => (
    <React.Fragment>
   
    <div id='left-sec'>
    <Fade left>
    <Bio/>
    </Fade>
    </div>
    <div id='right-sec'>
    <Fade delay={1000} right>
    <Personal/>
    </Fade>
    </div>
    <article>
    <ErrorBoundary>
    <Projects/>
    </ErrorBoundary>
    <Footer/>
    </article>

    {/* <Login/> */}
    </React.Fragment>
);

export default Body;
