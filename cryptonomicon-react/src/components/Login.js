import React from 'react';
import adapter from '../adapter'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleLogin = (e) => {
    e.preventDefault()
    adapter.auth.login(this.state.username, this.state.password).then(res => {
      if (res.error) {
        alert(res.error)
      } else {
        this.props.history.push("/")
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
      <form onSubmit={this.handleLogin}>
        <input value={this.state.username} type="text" name="username" placeholder="Username" onChange={this.onInputChange} />
        <input value={this.state.password} type="password" name="password" placeholder="Password" onChange={this.onInputChange} />
        <input type="submit" />
      </form>
    )
  }
}

export default Login
