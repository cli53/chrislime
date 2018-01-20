import React, { Component } from 'react';
import { withRouter } from 'react-router';


class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleSubmit(event) {
    event.preventDefault();
    fetch('/verify', {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    }).then(data => {
      console.log('This is data', data)
      if (data.status === 200) {
        this.props.history.push('/Secret')
      }
    })
  }

  changeUsername(event) {
    console.log(this.state.username)
    this.setState({
      username: event.target.value
    })
  }
  changePassword(event) {
    console.log(this.state.password)
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <div id='login-form'>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder='username' onChange={this.changeUsername} />
          <input type="text" name="password" placeholder='password' onChange={this.changePassword} />
          <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}

export default withRouter(Form);