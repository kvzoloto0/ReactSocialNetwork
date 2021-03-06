import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends';
import './Navbar.css';

const Navbar = (props) => {
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
        <div>
          <Friends />
        </div>
      </nav>
    )
}

export default Navbar;