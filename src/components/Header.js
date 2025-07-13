import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <img src="/images/gss-logo.png" alt="GSS Logo" />
            </Link>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link></li>
              <li><Link to="/programs" onClick={() => setIsMenuOpen(false)}>PROGRAMS</Link></li>
              <li><Link to="/birthdays" onClick={() => setIsMenuOpen(false)}>BIRTHDAYS</Link></li>
              <li><Link to="/coaches" onClick={() => setIsMenuOpen(false)}>COACHES</Link></li>
              <li><Link to="/gallery" onClick={() => setIsMenuOpen(false)}>GALLERY</Link></li>
            </ul>
          </nav>

          <div className="header-actions">
            <div className="contact-info">
              <a href="tel:949.235.8720" className="phone">949.235.8720</a>
            </div>
            <Link to="/book" className="btn btn-primary">Book a Session</Link>
            <button className="login-btn">Log In</button>
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 