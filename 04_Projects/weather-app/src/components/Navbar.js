import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/weather">WeatherApp</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
