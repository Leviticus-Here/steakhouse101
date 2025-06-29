import React, { useState } from 'react';

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
    <div>
      <form id="contactForm" onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" />
        <input name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
      <div id="responseMessage">{response}</div>
    </div>
  );
};

export default Contact;
