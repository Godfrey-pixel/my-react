import React from 'react';
import './HeroSection.css'; // Import the CSS file for the HeroSection component

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        <p>Your one-stop destination for amazing content.</p>
        <button className="cta-button">Learn More</button>
      </div>
    </section>
  );
};

export default HeroSection;
