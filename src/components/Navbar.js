import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <button className="nav-link btn btn-link text-white text-decoration-none" onClick={() => scrollToSection('home')}>
          Steakhouse 101
        </button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            {isHome ? (
              <>
                <li className="nav-item">
                  <button className="nav-link btn btn-link text-white text-decoration-none" onClick={() => scrollToSection('menu')}>
                    Menu
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link text-white text-decoration-none" onClick={() => scrollToSection('reservation')}>
                    Reservation
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/">Main Page</Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
