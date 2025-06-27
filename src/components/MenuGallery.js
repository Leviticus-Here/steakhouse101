// src/components/MenuGallery.js
import React from 'react';
import ribeyesteakImg from '../assets/Ribeye-Steak.jpg';
import filetmignonImg from '../assets/Filet-Mignon.jpg';
import sirloinsteakImg from '../assets/Sirloin-Steak.jpg';

const menuItems = [
  {
    src: ribeyesteakImg,
    caption: "Signature Ribeye",
    desc: "Juicy ribeye steak cooked to perfection."
  },
  {
    src: filetmignonImg,
    caption: "Filet Mignon",
    desc: "Tender filet mignon with elegant seasoning."
  },
  {
    src: sirloinsteakImg,
    caption: "Sizzling Sirloin",
    desc: "Sizzling sirloin with rich flavor."
  },
];

const MenuGallery = () => (
  <section id="menu" className="py-5 bg-dark text-white">
    <div className="container">
      <h2 className="text-center mb-4">Our Signature Cuts</h2>
      <div className="row">
        {menuItems.map((item, i) => (
          <div className="col-md-4" key={i}>
            <div className="card mb-4 shadow-sm">
              <img src={item.src} alt={item.caption} className="card-img-top" />
              <div className="card-body">
                <h5>{item.caption}</h5>
                {/* Add a description here if you want */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MenuGallery;
