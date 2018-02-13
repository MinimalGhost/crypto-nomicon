import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {

  const loggedIn = !!props.currentUser

  return (
    <nav className="main-nav split-para">
      <Link to="/" className="nav-title">CRYPTONOMICON</Link>
      { loggedIn ?
        <a onClick={props.logOut}>Logout</a>
      :
      <span>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign Up</Link>
      </span>
      }
    </nav>
  )
}

export default Navbar
