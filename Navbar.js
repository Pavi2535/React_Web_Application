import React from 'react';
import Allstudent from '../Pages/Allstudent';
import { FaGitlab } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="main-navbar">
      <div className="navbar-left">
        <span className="navbar-logo">
          {/* Replace FaGitlab with your logo image if needed */}
          <FaGitlab size={56} color="#34b6f5" className="logo-icon"/>
        </span>
        <span className="navbar-title">ECODERS</span>
      </div>
      <nav className="navbar-links">
        <Link to="/" className="navbar-link">HOME</Link>
        <Link to="/about" className="navbar-link">ABOUT US</Link>
        <Link to="/service" className="navbar-link">SERVICE</Link>
        <Link to="/portfolio" className="navbar-link">PORTFOLIO</Link>
        <Link to="/contact" className="navbar-link">CONTACT</Link>
        <Link to="/students" className="navbar-link">STUDENTS</Link>
      </nav>
    </header>
  );
}

export default Navbar;
