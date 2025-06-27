// src/components/ImageSlider.js
import React from 'react';

const slides = [
  { src: "public/images/Signature-Ribeye.jpg", caption: "Signature Ribeye" },
  { src: "public/images/Elegant-Ambience", caption: "Elegant Ambience" },
  { src: "public/images/Sizziling-Sirloin", caption: "Sizzling Sirloin" },
];

const ImageSlider = () => (
  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      {slides.map((_, idx) => (
        <button key={idx} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={idx} className={idx === 0 ? 'active' : ''}></button>
      ))}
    </div>
    <div className="carousel-inner">
      {slides.map((slide, idx) => (
        <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
          <img src={slide.src} className="d-block w-100" alt={slide.caption} />
          <div className="carousel-caption d-none d-md-block">
            <h5>{slide.caption}</h5>
          </div>
        </div>
      ))}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  </div>
);

export default ImageSlider;
