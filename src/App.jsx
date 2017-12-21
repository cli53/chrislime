import React, { Component } from 'react';
import Routes from './components/routes.jsx';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      contactVisible: false,
      giphyArr: [],
      gipyInput: "",
    }
    this.contactBar = this.contactBar.bind(this);
    this.giphyCall = this.giphyCall.bind(this);
    this.giphyChange = this.giphyChange.bind(this);
  }
    giphyCall(){
   fetch(`https://api.giphy.com/v1/gifs/search?api_key=1407a89874814d21a7d7c728b08138d5&q=${this.state.giphyInput}&limit=5&offset=0&rating=G&lang=en`)
    .then(res => {
        return res.json();
    }).then(data => {
      this.setState((prevState, props) => {
        console.log(prevState)
        console.log(props)
        return {giphyArr: data.data}
      })
    }).catch(err => {
        console.log(err);
    });
  }
  giphyChange(event){
    this.setState({
      giphyInput: event.target.value,
    })
  }
  contactBar() {
    this.setState((prevState, props) => {
      return {contactVisible: !prevState.contactVisible}
    })
  }
  render() {
    return (
    <Routes 
    contactVis={this.state.contactVisible}
    contactBar={this.contactBar}
    giphyArr={this.state.giphyArr}
    giphyCall={this.giphyCall}
    giphyChange={this.giphyChange}
    />
  )
  }
};

export default App;
