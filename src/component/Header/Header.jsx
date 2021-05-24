import React from 'react';
import './Header.css';
import logo from './../img/logoReactFromKirill.png'

const Header = () => {
    return (
        <header className="col-12 header">
          <img src={logo} className="logo" />
        </header>
    )
}

export default Header;