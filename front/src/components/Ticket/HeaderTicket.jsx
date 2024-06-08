import React from 'react';
import logo from '../Home/img/TICKETY2.svg';
import shop from '../Home/img/shop2.png';
import './HeaderTicket.scss';

function HeaderTicket() {
  return (
    <>
    <header className='hedear-d'>
      <div className="header-container">
        <nav className="nav-links">
          <a href='/'>HOME</a>
          <a className='rose'>/</a>
          <a>GET A TICKET</a>
          <a className='rose'>/</a>
          <a>ABOUT US</a>
        </nav>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="shop-icon-container">
          <img src={shop} alt="Shop Icon" className="shop-icon" />
        </div>
      </div>
    </header>
    <div className='head-cat'>
        <div className='inpt-search'>
            <input type='text' placeholder='Cherchez ce que vous voulez'/>
        </div>
        <div className='ul-cat'>
        <ul>
            <li>All</li>
            <li>Cinéma</li>
            <li>Festival Mawazin</li>
            <li>Festival Gnoua</li>
            <li>Formations</li>
            <li>Concerts</li>
            <li>Nostalgia Lovers Festival</li>
           
        </ul>
        </div>
    </div>
    </>
  );
}

export default HeaderTicket;