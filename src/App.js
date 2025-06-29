import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
<<<<<<< HEAD
=======
import Contact from './components/Contact';
>>>>>>> c1c45d7cc223bf85a8e468e33ca7662061f51ac9
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
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
