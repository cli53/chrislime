import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      emailName: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  async handleSubmit(){
    try{
      let postEmail = await fetch('/email', {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            item: this.state.emailName,
        })
    })
    console.log(postEmail)
    }
    catch(e) {

    }
  }

  handleChange(event){
    console.log(this.state.emailName)
    this.setState({
      emailName: event.target.value
    })
  }

  render() {
    return (
    <div id='email-form'>
    <form onSubmit={this.handleSubmit}>
    <input type="text" name="email" onChange={this.handleChange}/>
    <button type='submit'>submit</button>
     </form>
     </div>
    )
  }
}