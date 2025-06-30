import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setResponse('Please fill out all fields.');
      return;
    }

    setResponse(`Thank you, ${name}! We'll get back to you soon.`);
    form.reset();
  };

  return (
    <div className="contact-page">
      {/* Static Info Section */}
      <section className="py-5 contact-info" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="mb-4">Contact Us</h2>
          <p>📞 <strong>Phone:</strong> (123) 456-7890</p>
          <p>📧 <strong>Email:</strong> contact@steakhouse101.com</p>
          <p>📍 <strong>Address:</strong> 101 Flame Grill St, Sizzle City, THE MOON</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <form id="contactForm" onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" />
            <input name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
          {response && (
            <div id="responseMessage" className={response.includes('Thank you') ? 'success' : 'error'}>
              {response}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
