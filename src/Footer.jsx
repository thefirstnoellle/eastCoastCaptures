import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 East Coast Captures. All rights reserved.</p>
      <Link to="/manage">Manage</Link>
    </footer>
  );
}

export default Footer;