import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-time">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/wizarding-schools" className="nav-link">Wizarding Schools</Link>
        </li>
        <li className="nav-item">
          <Link to="/students" className="nav-link">Students</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
