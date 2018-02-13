import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import adapter from './adapter'
import CryptoContainer from './components/CryptoContainer'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'

class App extends Component {
  state = {
    auth: { currentUser: null },
    searchTerm: "",
    tickers: [],
    cryptos: [],
    selectedItem: {}
  }

  setLoggedInUser = (user) => {
    localStorage.setItem('token', user.token)
    this.setState({
      auth: {
        currentUser: {
          username: user.username,
          id: user.id
        }
      }
    })
    this.fetchTickers()
  }

  removeLoggedInUser = () => {
    adapter.auth.logout(this.state.auth.currentUser)
    .then(() => {
      localStorage.removeItem('token')
      this.setState({
        auth: { currentUser: null }
      })
      console.log(localStorage.token)
      this.props.history.push('/login')
    })
  }

  fetchTickers = () => {
    adapter.tickers.getTickers()
    .then(tickers_data => this.setState({
      tickers: tickers_data,
      selectedItem: tickers_data[0]
    }))
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      adapter.auth.getLoggedInUser().then(user => {
        if (user) {
          this.setState({ auth: {currentUser: user } })
        } else {
          this.setState({ auth: { currentUser: null } })
        }
      })
    } else {
      console.log('No token found');
    }
  }

  render() {
    return (
      <div>
        <Navbar
          currentUser={this.state.auth.currentUser}
          logOut={this.removeLoggedInUser}
        />
      <Switch>
        <Route exact path='/login' render={(routerProps) => {
            return <Login history={routerProps.history} setUser={this.setLoggedInUser} />
          }} />

        <Route exact path='/signup' render={(routerProps) => {
            return <Signup history={routerProps.history} setUser={this.setLoggedInUser} />
          }} />
      </Switch>
        { this.state.auth.currentUser != null && <CryptoContainer tickers={this.state.tickers} selectedItem={this.state.selectedItem}/> }
      </div>
    );
  }
}

export default withRouter(App);
