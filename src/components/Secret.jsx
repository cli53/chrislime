import React, { Component } from 'react';

class Secret extends Component {
 constructor() {
  super()
  this.state = {
    successArr: [],
  }
 }

 componentDidMount() {
   fetch('https://api.giphy.com/v1/gifs/search?api_key=1407a89874814d21a7d7c728b08138d5&q=success&limit=30&offset=0&rating=R&lang=en').then(res => {
     return res.json();
   }).then(data => {
     console.log(data.data)
     this.setState({
       successArr: data.data
     })
   })
 }

 render() {
   return (
    <React.Fragment>
    <h1>You made it!</h1>
    {this.state.successArr.map(function(giphy, i) {
    return <img key ={i} alt={i} src={giphy.images.fixed_height.url}/>
  })}
    </React.Fragment>
   )
 }
}
// const Secret = () => {
//   return <h1>You made it!</h1>
// }

export default Secret;

