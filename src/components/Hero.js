import React from 'react';
import './Hero.css';
import ImageSlider from './ImageSlider';

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url('/images/hero-steak.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '4rem 2rem',
        color: '#fff',
      }}
    >
      <div className="text-center">
        <h1>Welcome to Steakhouse 101</h1>
        <p>Where flavor meets fire.</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <ImageSlider />
      </div>
    </section>
  );
};

export default Hero;
