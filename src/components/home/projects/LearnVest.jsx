import React from 'react';
import learnVestLogo from '../../../../assets/learnvest/learnvest.png';
import Fade from 'react-reveal/Fade';

const LearnVest = () => {
  return (
  <article id='CSX-article'>
  <Fade bottom>
  <p className='project-title'><span><img className='project-logo'src={learnVestLogo}></img></span><a href="https://www.northwesternmutual.com/personal-financial-planning/">Design Systems and Financial Web Application</a></p>
  </Fade>
  <p className='article-des'>Building a financial planning application that helps our client manage their financial goals. This planning experience is our core product that I work on building the UI for using JS, React, Redux, Apollo Graphl, and Node with testing suite including Jest and RTL. I also work on other projects that contribute to our core product, such as the design systems team, charting library, and the component library that I built specifically for our team.</p>
  </article>
  )
}

export default LearnVest;