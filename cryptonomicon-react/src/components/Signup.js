import React from 'react';
import adapter from '../adapter';

class Signup extends React.Component {
  state = {
    username: '',
    password: '',
    password_confirmation: ''
  }

  handleSignup = (e) => {
    e.preventDefault()
    adapter.auth.signup(this.state).then(res => {
      if (res.error) {
        alert(res.error)
      } else {
        this.props.history.push('/')
        this.props.setUser(res)
      }
    })
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSignup}>
        <label>Username</label>
        <input value={this.state.username} name="username" type="text" placeholder="Username" onChange={this.onInputChange}></input> <br/>

        <label>Password</label>
        <input value={this.state.password} name="password" type="text" placeholder="Password" onChange={this.onInputChange}></input> <br/>

        <label>Password confirmation</label>
        <input value={this.state.password_confirmation} name="password_confirmation" type="text" placeholder="Confirm Password" onChange={this.onInputChange}></input> <br/>

        <input type="submit" value="Sign Up" />
      </form>
    )
  }
}

export default Signup
