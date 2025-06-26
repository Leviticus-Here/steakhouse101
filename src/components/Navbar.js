// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

// Define scrollToSection
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div className="container">
      <button className="nav-link" onClick={() => scrollToSection('home')}>Steakhouse 101</button>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="nav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="#menu">Menu</a></li>
          <li className="nav-item"><a className="nav-link" href="#reservation">Reservation</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
