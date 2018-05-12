import React from 'react'
import mug from '../../../../assets/misc/mug.svg';
import sun from '../../../../assets/misc/sun.svg';
import dog from '../../../../assets/misc/dog.svg';

const Personal = () => {
  return (
    <p className="header-one" id='bio-right'>
      But also enjoy sipping <span><img id='mug-icon' src={mug} alt="tea" title="tea"/></span>, giving <span><img id='dog-icon' src={dog} alt="dog" title="puppy cats"/></span> treats , and soaking up <span><img id='sun-icon' src={sun} alt="sun" title="sun"/></span>
    </p>
  )
}
 
export default Personal;