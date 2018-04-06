import React from 'react';
import csLogo from '../../../../assets/csx/cslogo.png';
import Fade from 'react-reveal/Fade';

const CS = () => {
  return (
  <article id='CS-article'>
  <p className='project-title'><span><img className='project-logo'src={csLogo}></img></span><a href="https://www.codesmith.io/">Codesmith.io</a></p>
  <p className='article-des'>Migrating an entire system to new tools and frameworks isn’t an easy task but not all heroes wear capes. Coming soon!</p>
  </article>
  )
}

export default CS;