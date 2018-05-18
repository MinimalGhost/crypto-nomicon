import React from 'react';
import adapter from '../adapter';
import './LoginSignup.css';

//Controlled component to handle Signup

class Signup extends React.Component {

  state = {
    username: '',
    password: '',
    password_confirmation: ''
  };

  //on submit, provide call signup fetch using state as argument
  //if successful, change browser URL and set user token for hot login
  handleSignup = (e) => {
    e.preventDefault();
    adapter.auth.signup(this.state).then(res => {
      if (res.error) {
        alert(res.error);
      } else {
        this.props.history.push('/');
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
      <form className="crypto-form" onSubmit={this.handleSignup}>
        <label>Username: </label> <br />
        <input value={this.state.username} name="username" type="text" onChange={this.onInputChange}></input> <br/>

        <label>Password: </label> <br />
        <input value={this.state.password} name="password" type="password" onChange={this.onInputChange}></input> <br/>

        <label>Confirm password:</label> <br />
        <input value={this.state.password_confirmation} name="password_confirmation" type="password" onChange={this.onInputChange}></input> <br/>

        <input className="submit-button" type="submit" value="Sign Up" />
      </form>
    );
  };
};

export default Signup;
