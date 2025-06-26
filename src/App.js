// src/App.js
import React from 'react';
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
    <>
      <Navbar />
      <Hero />
      <ImageSlider />
      <MenuGallery />
      <ReservationForm />
      <FAQ />
      <Footer />
      {/* other components */}
      <ScrollToTop />
    </>
  );
}

export default App;

