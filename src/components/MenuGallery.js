// src/components/MenuGallery.js
import React from 'react';
import ribeyesteakImg from '../assets/Ribeye-Steak.jpg';
import filetmignonImg from '../assets/Filet-Mignon.jpg';
import sirloinsteakImg from '../assets/Sirloin-Steak.jpg';

const menuItems = [
  { src: ribeyesteakImg, caption: "Signature Ribeye" },
  { src: filetmignonImg, caption: "Elegant Ambience" },
  { src: sirloinsteakImg, caption: "Sizzling Sirloin" },
];

const MenuGallery = () => (
  <section id="menu" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4">Our Signature Cuts</h2>
      <div className="row">
        {menuItems.map((item, i) => (
          <div className="col-md-4" key={i}>
            <div className="card mb-4 shadow-sm">
              <img src={item.image} alt={item.name} className="card-img-top" />
              <div className="card-body">
                <h5>{item.name}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MenuGallery;