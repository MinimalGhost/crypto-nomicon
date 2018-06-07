import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import adapter from '../../adapter';
import CryptoContainer from '../CryptoContainer/CryptoContainer';
import Navbar from '../../components/Navbar/Navbar';
import Login from '../../components/LoginSignup/Login';
import Signup from '../../components/LoginSignup/Signup';

class App extends Component {
  state = {
    auth: { currentUser: null }
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      adapter.auth.getLoggedInUser().then(user => {
        if (user) {
          this.setState({ auth: { currentUser: user } });
        } else {
          this.setState({ auth: { currentUser: null } });
        };
      });
    } else {
      console.log('No token found');
    };
  };

  setLoggedInUser = (user) => {
    localStorage.setItem('token', user.token);
    this.setState({
      auth: {
        currentUser: {
          username: user.username,
          id: user.id
        }
      }
    });
  };

  removeLoggedInUser = () => {
    adapter.auth.logout(this.state.auth.currentUser).then(() => {
      localStorage.removeItem('token');
      this.setState({
        auth: { currentUser: null }
      });
      this.props.history.push('/login');
    });
  };



  //render navbar; render login or signup based on route
  //conditionally render cryptocontainer on auth

  render() {
    return (
      <div>
        <Navbar currentUser={this.state.auth.currentUser} logOut={this.removeLoggedInUser} />
        <Switch>
          <Route exact path='/login' render={(routerProps) => {
              return <Login history={routerProps.history} setUser={this.setLoggedInUser} />
          }} />
          <Route exact path='/signup' render={(routerProps) => {
              return <Signup history={routerProps.history} setUser={this.setLoggedInUser} />
          }} />
        </Switch>
        { this.state.auth.currentUser != null && <CryptoContainer /> }
      </div>
    );
  };
};

export default withRouter(App);
