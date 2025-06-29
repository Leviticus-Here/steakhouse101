// src/components/FAQ.js
import React from 'react';

const FAQ = () => (
<<<<<<< HEAD
  <section className="py-5 bg-dark grey text-white">
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
    <div className="accordion-body">
      Yes, we have salads, soups, and a portobello steak option.
    </div>
  </div>
</div>

<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
      What are your opening hours?
    </button>
  </h2>
  <div id="faq2" className="accordion-collapse collapse">
    <div className="accordion-body">
      We’re open Monday through Saturday from 11 AM to 10 PM, and Sundays from 12 PM to 8 PM.
    </div>
  </div>
</div>

<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
      Do you offer gluten-free options?
    </button>
  </h2>
  <div id="faq3" className="accordion-collapse collapse">
    <div className="accordion-body">
      Yes, we offer gluten-free pasta, bread, and a variety of dishes that can be customized upon request.
    </div>
  </div>
</div>

<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
      Is there parking available?
    </button>
  </h2>
  <div id="faq4" className="accordion-collapse collapse">
    <div className="accordion-body">
      Yes, we have a private lot behind the restaurant and street parking nearby.
    </div>
  </div>
</div>
=======
  <section className="py-5 bg-dark text-white">
    <div className="container">
      <h2>Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">

        {/* FAQ Item 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq1"
              aria-expanded="true"
              aria-controls="faq1"
            >
              Do you offer vegetarian options?
            </button>
          </h2>
          <div
            id="faq1"
            className="accordion-collapse collapse show"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes, we have salads, soups, and a portobello steak option.
            </div>
          </div>
        </div>

        {/* FAQ Item 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq2"
              aria-expanded="false"
              aria-controls="faq2"
            >
              Do you take reservations?
            </button>
          </h2>
          <div
            id="faq2"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes, you can make a reservation through our website or by calling us.
            </div>
          </div>
        </div>

        {/* FAQ Item 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq3"
              aria-expanded="false"
              aria-controls="faq3"
            >
              Do you offer catering services?
            </button>
          </h2>
          <div
            id="faq3"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes, we offer catering for events and private parties. Contact us for details.
            </div>
          </div>
        </div>
>>>>>>> c1c45d7cc223bf85a8e468e33ca7662061f51ac9

      </div>
    </div>
  </section>
);

export default FAQ;
