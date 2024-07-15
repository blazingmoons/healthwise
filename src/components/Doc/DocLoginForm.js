// src/components/Doctor/DoctorLoginForm.js
import React, { useState } from 'react';
import '../LForms.css';

const DoctorLoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to the API
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Doctor Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">Password</label>
          <input
            className="form-input"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="form-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default DoctorLoginForm;
