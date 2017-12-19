import React, { Component } from 'react';
import reader from 'react-dom';
import Routes from './components/routes.jsx';


class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return <Routes/>
  }
};

export default App;
