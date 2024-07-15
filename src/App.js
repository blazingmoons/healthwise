// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import DoctorRegistrationForm from './components/Doc/DocRegForm';
import DoctorLoginForm from './components/Doc/DocLoginForm';
import PatientRegistrationForm from './components/Patient/PatRegForm';
import PatientLoginForm from './components/Patient/PatLoginForm';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <header className="app-header">
          <h1 className="app-title">HealthWise</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="dropdown">
                <button className="dropbtn">Contact</button>
                <div className="dropdown-content">
                  <a href="mailto:contact@healthwise.com">Email: contact@healthwise.com</a>
                  <a href="tel:+1234567890">Phone: +1 (234) 567-890</a>
                  <a href="tel:+0987654321">Phone: +1 (987) 654-321</a>
                </div>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors/register" element={<DoctorRegistrationForm />} />
            <Route path="/patients/register" element={<PatientRegistrationForm />} />
            <Route path="/doctors/login" element={<DoctorLoginForm />} />
            <Route path="/patients/login" element={<PatientLoginForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
