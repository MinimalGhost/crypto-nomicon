import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {

  const loggedIn = !!props.currentUser

  return (
    <nav className="main-nav">
      <li className="nav-title">CRYPTONOMICON</li>
      { loggedIn ?
      <li onClick={props.logOut}>Logout</li>
      :
      <li><Link to='/login'>Login</Link></li>
      }
    </nav>
  )
}

export default Navbar
