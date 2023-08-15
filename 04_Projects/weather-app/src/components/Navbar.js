import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/weather">Weather App</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;