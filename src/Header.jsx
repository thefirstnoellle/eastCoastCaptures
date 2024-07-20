import React from 'react';
import logo from './assets/3.png';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='nav'>
      <ul>
      <li>
        <Link to="/">about</Link>
        </li>
        <li>
        <Link to="/services">services.</Link>
        </li>
        <Link to="/">
        <img src={logo} alt="Logo" />
        </Link>
        <li>
        <Link to="/galleries">galleries.</Link>
        </li>
        <li>
        <Link to="/contact">contact.</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;