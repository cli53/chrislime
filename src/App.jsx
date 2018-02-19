import React, { Component } from 'react';
import Routes from './components/routes.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    // console.log('inside THIS:', this)
    // "this" keyword is referring to the constructor function object so it holds the methods within the class, props, state object with it's properties, ref, reactInternal properties, and the updater obj which is based on the scheduler
    // THIS: Object { props: {}, context: undefined, refs: {}, updater: {…}, giphyCall: u/this.giphyCall(), giphyChange: u/this.giphyChange(), contactBar: u/this.contactBar() }
    this.state = {
      contactVisible: false,
      // giphyArr: [],
      // gipyInput: '',
    };

    // `.bind` doesn’t modify the original function, it just returns a new function with the given context whenever it is called.
    // The key here is that the constructor is only called once, not on every render. As oppose to binding the event handlers in the callbacks within the render function which will create a new function on every render and React renders often.
    // this.contactBar = this.contactBar.bind(this); // binding 'this' context of the constructor to the our methods
    // this.giphyCall = this.giphyCall.bind(this);
    // this.giphyChange = this.giphyChange.bind(this);
  }
  // Using 'public class fields syntax' to correctly bind callbacks with arrow function, ensuring 'this' is bound within the methods
  // Arrow functions adopt the this binding of the enclosing scope (in other words, they don’t change the meaning of this), so things just work automatically.
  contactBar = () => {
    this.setState((prevState, props) => {
      return { contactVisible: !prevState.contactVisible }
    })
 }

  render() {
    // With JSX you pass a function as the event handler, rather than a string.
    return (
      <main id="main-frame">
      <Routes/>
      <Header/>
      <Footer contactVis={this.state.contactVisible} contactBar={this.contactBar}/>
      </main>
  )
  }
}

export default App;

 /* contactBar={() => this.contactBar()} The problem with this syntax is that a different callback is created each time App renders. if this callback is passed as a prop to lower components, those componets might do extra re-rendering - performance issues */

//   giphyCall = () => {
//  fetch(`https://api.giphy.com/v1/gifs/search?api_key=1407a89874814d21a7d7c728b08138d5&q=${this.state.giphyInput}&limit=30&offset=0&rating=R&lang=en`)
//   .then(res => {
//       return res.json();
//   }).then(data => {
//     this.setState((prevState, props) => {
//       console.log(prevState)
//       console.log(props)
//       return {giphyArr: data.data}
//     })
//   }).catch(err => {
//       console.log(err);
//   });

// // }

// giphyChange = (event) => {
//   this.setState({
//     giphyInput: event.target.value,
//   })
// }
