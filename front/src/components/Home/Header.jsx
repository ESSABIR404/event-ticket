import React from 'react';
import './Header.scss';
import logo from './img/TICKETY.svg'; // Assurez-vous que le chemin est correct
import shopIcon from './img/shop.png'; // Assurez-vous que le chemin est correct

function Header() {
  return (
    <header>
      <div className="header-container">
        <nav className="nav-links">
          <a>HOME</a>
          <a className='rose'>/</a>
          <a href='/tickets'>GET A TICKET</a>
          <a className='rose'>/</a>
          <a>ABOUT US</a>
        </nav>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="shop-icon-container">
          <img src={shopIcon} alt="Shop Icon" className="shop-icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;