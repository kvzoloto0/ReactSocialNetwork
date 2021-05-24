import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return  (
      <nav className="col-3 Navbar">
        <div>
          <NavLink to="/Profile" activeClassName="activeLink">Profile</NavLink>
        </div>
        <div>
          <NavLink to="/Dialogs" activeClassName="activeLink">Messages</NavLink>
        </div>
        <div>
          <NavLink to="/News" activeClassName="activeLink">News</NavLink>
        </div>
        <div>
          <NavLink to="/Music" activeClassName="activeLink">Music</NavLink>
        </div>
        <div>
          <NavLink to="/Settings" activeClassName="activeLink">Settings</NavLink>
        </div>
      </nav>
    )
}

export default Navbar;