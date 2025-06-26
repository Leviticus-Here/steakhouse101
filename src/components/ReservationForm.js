// src/components/ReservationForm.js
import React, { useState } from 'react';

const ReservationForm = () => {
  const [form, setForm] = useState({
    name: localStorage.getItem("name") || "",
    email: localStorage.getItem("email") || "",
    date: "",
    guests: 2
  });

  const [confirmed, setConfirmed] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem("name", form.name);
    localStorage.setItem("email", form.email);
    setConfirmed(true);
  };

  return (
    <section id="reservation" className="py-5">
      <div className="container">
        <h2 className="mb-4">Reserve Your Table</h2>
        <form onSubmit={handleSubmit}>
          <input className="form-control mb-2" name="name" value={form.name} onChange={handleChange} required />
          <input className="form-control mb-2" name="email" type="email" value={form.email} onChange={handleChange} required />
          <input className="form-control mb-2" name="date" type="date" onChange={handleChange} required />
          <input className="form-control mb-2" name="guests" type="number" min="1" max="20" onChange={handleChange} required />
          <button className="btn btn-success" type="submit">Book Now</button>
        </form>
        {confirmed && <div className="alert alert-success mt-3">Reservation confirmed! See you soon.</div>}
      </div>
    </section>
  );
};

export default ReservationForm;