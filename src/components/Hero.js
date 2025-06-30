import React from 'react';
import './Hero.css';
import backgroundimg from '../assets/steakhouse-101-background.jpg';

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${backgroundimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="overlay">
        <div className="hero-content">
          <h1>Welcome to Steakhouse 101</h1>
          <h2>Where flavor meets fire.</h2>
          <button
            className="hero-button"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

