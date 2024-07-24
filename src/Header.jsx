import React from 'react';
import logo from './assets/3.png';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='nav'>
      <ul>
      <li>
        <Link className="link" to="/">about.</Link>
        </li>
        <li>
        <Link className="link" to="/services">services.</Link>
        </li>
        <Link className="link" to="/"> <img src={logo} alt="Logo" /></Link>
        <li>
        <Link className="link" to="/galleries">galleries.</Link>
        </li>
        <li>
        <Link className="link" to="/contact">contact.</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;