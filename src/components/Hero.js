// src/components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => (
  <header className="hero d-flex align-items-center text-white text-center">
    <div className="container">
      <h1>Welcome to Steakhouse 101</h1>
      <p>Premium cuts. Timeless taste.</p>
      <a href="#reservation" className="btn btn-primary mt-3">Reserve a Table</a>
    </div>
  </header>
);

export default Hero;
