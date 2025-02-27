 // src/Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Experience Unforgettable Events</h1>
          <p className="hero-subtitle">Your one-stop solution for all event needs.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
