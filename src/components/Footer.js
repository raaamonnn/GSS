import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Premier Soccer Training</h3>
            <p>Orange County based private soccer coaching, designed to equip kids to reach the highest levels in the game.</p>
            <div className="contact-info">
              <p><strong>Phone:</strong> <a href="tel:949.235.8720">949.235.8720</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@premier-soccertraining.com">info@premier-soccertraining.com</a></p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/birthdays">Birthday Parties</Link></li>
              <li><Link to="/coaches">Coaches</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Private Training</li>
              <li>Group Training</li>
              <li>Soccer Camps</li>
              <li>Team Training</li>
              <li>Birthday Parties</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
            </div>
            <div className="newsletter">
              <h5>Stay Updated</h5>
              <p>Subscribe to our newsletter for training tips and updates.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Premier Soccer Training. All rights reserved.</p>
            <div className="footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 