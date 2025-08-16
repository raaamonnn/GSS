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
              <img src={`${process.env.PUBLIC_URL}/images/gsslogo.webp`} alt="GSS Logo" />
            </Link>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link></li>
              <li><Link to="/programs" onClick={() => setIsMenuOpen(false)}>PROGRAMS</Link></li>
              <li><Link to="/coaches" onClick={() => setIsMenuOpen(false)}>COACHES</Link></li>
            </ul>
          </nav>

          <div className="header-actions">
            <div className="contact-info">
              <a href="tel:949.537.6465" className="phone">949.537.6465</a>
            </div>
            <a href="https://docs.google.com/forms/d/1TfOOKB2NfErY2DAALDHZEL9XfHyeTiDpbBSlDIp5tL0/viewform" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Book a Session</a>
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