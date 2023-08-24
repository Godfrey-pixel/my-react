import React from 'react';
import './Footer.css'; // Import the CSS file for the Footer component

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="/">Logo</a>
        </div>
        <ul className="footer-links">
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <p className="footer-text">© 2023 Godfrey Shai. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
