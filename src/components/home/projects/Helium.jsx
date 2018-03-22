import React from 'react';
import heliumLogo from '../../../../assets/helium/heliumicon.png';

const Helium = () => {
  return (
  <article id='Helium-article'>
  <p className='project-title'><span id='helium-logo'><img className='project-logo'src={heliumLogo}></img></span>Helium.js</p>
  <p className='article-des'>
  Building Universal React Applications often comes with many challenges that include rendering, routing, data retrieval, sharing resources and maintaining consistency between the server and client. Helium.js is here to lighten the browser workload via server-side rendering. Our module offers all the benefits associated with server-side rendering such as improved Critical Rendering Path performance and Search Engine Optimization.
  </p>
  <p className='article-des'>
  Helium.js provides developers with a minimalistic package that offers the performance benefits of server-side rendering without sacrificing time rewriting a majority of the codebase. The React framework has been continuously implementing SSR expansions which provide the perfect platform to cultivate Helium.js into a useful resource for the developer community.
  </p>

  <p>
   <a href="https://github.com/SJCProduction/Helium.js" target="_blank">Check it out on github</a>
  </p>
  </article>
  )
}

export default Helium;