import React from 'react';
import logo from './assets/3.png';

function Header() {
  return (
    <nav>
      <ul>
        <li><a href="#home">about</a></li>
        <li><a href="#about">services</a></li>
        <img src={logo} alt="Logo"/>
        <li><a href="#services">galleries</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    </nav>
  );
}

export default Header;