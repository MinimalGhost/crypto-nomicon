import React from 'react';
import adapter from '../adapter';
import { Link } from 'react-router-dom';
import './Login.css';

//controlled component to handle login

class Login extends React.Component {

  state = {
    username: '',
    password: ''
  };

  //call login fetch using state as args, on success
  //change browser URL and setUser token for hot login
  handleLogin = (e) => {
    e.preventDefault();
    adapter.auth.login(this.state.username, this.state.password).then(res => {
      if (res.error) {
        alert(res.error);
      } else {
        this.props.history.push("/");
        this.props.setUser(res);
      };
    });
  };

  //control text input fields
  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="crypto-form">
        <form onSubmit={this.handleLogin}>
          <label>Username: </label> <br />
          <input value={this.state.username} type="text" name="username" onChange={this.onInputChange} /> <br />

          <label>Password: </label> <br />
          <input value={this.state.password} type="password" name="password" onChange={this.onInputChange} /> <br />

          <input className="submit-button" type="submit" value="Login"/>
        </form>
        <Link to='/signup'>No Account? Sign Up</Link>
      </div>
    );
  };
};

export default Login;
