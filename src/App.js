import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuGallery from './components/MenuGallery';
import ReservationForm from './components/ReservationForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ImageSlider from './components/ImageSlider';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ImageSlider />
              <MenuGallery />
              <ReservationForm />
              <FAQ />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        {/* Add more pages/routes here */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
