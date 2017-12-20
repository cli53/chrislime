import React from 'react';

const About = ({ giphyCall, giphyArr, giphyChange }) => {

  return (
  <React.Fragment>
  <div className="wrap">
   <div className="search">
      <input type="text" className="searchTerm" placeholder="What are you looking for?" onChange={giphyChange}/>
      <button type="submit" onClick={giphyCall} className="searchButton">
        Find
     </button>
   </div>
</div>
<ul>
  {giphyArr.map(function(giphy, i) {
    return <img key ={i} alt={i} src={giphy.images.fixed_height.url}/>
  })}
</ul>
</React.Fragment>
  )
};

export default About;