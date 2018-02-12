import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {

  const links = ['Login', 'Cryptos'].map(l =>
    <li key={l}>
      <a href="">{l}</a>
    </li>
  )

  const loggedIn = !!props.currentUser

  return (
    <div>
      <nav className="App-nav">
        <span className="App-title">CRYPTONOMICON</span>
      </nav>
    </div>
  )
}

export default Navbar
