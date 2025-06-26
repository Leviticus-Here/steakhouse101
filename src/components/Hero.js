import React from 'react';
import './Hero.css'; // Keep this for layout/styling if needed

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url('/images/hero-steak.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div>
        <h1>Welcome to Steakhouse 101</h1>
        <p>Where flavor meets fire.</p>
      </div>
    </section>
  );
};

export default Hero;
