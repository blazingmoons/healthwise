// src/components/Patient/PatientRegistrationForm.js
import React, { useState } from 'react';
import '../RForm.css';

const PatientRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dateOfBirth: '',
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
      <h2 className="form-title">Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">Name</label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
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
        <div className="form-group">
          <label className="form-label" htmlFor="dateOfBirth">Date of Birth</label>
          <input
            className="form-input"
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <button className="form-button" type="submit">Register</button>
      </form>
    </div>
  );
};

export default PatientRegistrationForm;
