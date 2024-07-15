// src/components/Doctor/DoctorRegistrationForm.js
import React, { useState } from 'react';
import '../RForm.css';

const DoctorRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    specialty: '',
    startTime: '',
    endTime: '',
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
      <h2 className="form-title">Doctor Registration</h2>
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
          <label className="form-label" htmlFor="specialty">Specialty</label>
          <input
            className="form-input"
            type="text"
            id="specialty"
            name="specialty"
            value={formData.specialty}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
            <h3>Consultation Time:</h3>
          <label className="form-label" htmlFor="startTime">Start Time</label>
          <input
            className="form-input"
            type="time"
            id="startTime"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="endTime">End Time</label>
          <input
            className="form-input"
            type="time"
            id="endTime"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            required
          />
        </div>
        <button className="form-button" type="submit">Register</button>
      </form>
    </div>
  );
};

export default DoctorRegistrationForm;
