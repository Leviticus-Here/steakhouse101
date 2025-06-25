// src/components/FAQ.js
import React from 'react';

const FAQ = () => (
  <section className="py-5 bg-light">
    <div className="container">
      <h2>Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
              Do you offer vegetarian options?
            </button>
          </h2>
          <div id="faq1" className="accordion-collapse collapse show">
            <div className="accordion-body">Yes, we have salads, soups, and a portobello steak option.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FAQ;