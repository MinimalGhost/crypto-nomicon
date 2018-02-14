import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {

  const loggedIn = !!props.currentUser

  return (
    <nav className="main-nav">
      <img src="cthulhu_8bit.png" alt="necro image" />
      <li className="nav-title">CRYPTONOMICON</li>
      { loggedIn ?
      <li className="nav-logout" onClick={props.logOut}>Leave Us</li>
      :
      <li><Link to='/login'>Join Us</Link></li>
      }
    </nav>
  )
}

export default Navbar
