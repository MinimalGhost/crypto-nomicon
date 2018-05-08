import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

  //confirm currentUser prop is not null
  const loggedIn = !!props.currentUser;

  //conditionally render link to log in or log out
  return (
    <nav className="main-nav">
      <img src="cthulhu_8bit.png" alt="cryptonomicon logo" />
      <li className="nav-title">CRYPTONOMICON</li>
      { loggedIn ?
      <li className="nav-logout" onClick={props.logOut}>Leave Us</li>
      :
      <li><Link to='/login'>Join Us</Link></li>
      }
    </nav>
  );
};

export default Navbar;
