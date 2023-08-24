import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import the CSS file for the Navbar component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when screen width changes
  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', closeMenuOnResize);

    return () => {
      window.removeEventListener('resize', closeMenuOnResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>
      <input
        type="checkbox"
        className="menu-checkbox"
        id="menu-checkbox"
        checked={isMenuOpen}
        onChange={toggleMenu}
      />
      <label htmlFor="menu-checkbox" className="menu-icon">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </label>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li className="dropdown">
          <a href="/services">Services</a>
          <div className="dropdown-content">
            <a href="/seo">SEO</a>
            <a href="/web-development">Web Development</a>
            <a href="/web-design">Web Design</a>
          </div>
        </li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;


