import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {

  const loggedIn = !!props.currentUser

  return (
    <nav className="main-nav">
      <Link to="/" className="nav-title">CRYPTONOMICON</Link>
      <ul>
        { loggedIn ?
          <li><a onClick={props.logOut}>Logout</a></li>
        :
           <div>
           <li><Link to='/login'>Login</Link></li>
           <li><Link to='/signup'>Sign Up</Link></li>
           </div>
        }
      </ul>
    </nav>
  )
}

export default Navbar
