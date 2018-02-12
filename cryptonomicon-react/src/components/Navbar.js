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
    <nav className="main-nav">
      <span className="nav-title">CRYPTONOMICON</span>
    </nav>
  )
}

export default Navbar
