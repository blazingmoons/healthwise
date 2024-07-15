// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import healthwise from '../assets/medical-5459630_1280.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
      <h2 className="seaweed-script-regular">Welcome!</h2>
      <p className="anton-regular ">Helping you take a chill pill!</p>
        <div className="dropdown-container">
          <div className="dropdown">
            <button className="dropbtn">Register</button>
            <div className="dropdown-content">
              <Link to="/doctors/register"> Doctor</Link>
              <Link to="/patients/register"> Patient</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Login</button>
            <div className="dropdown-content">
              <Link to="/doctors/login">Doctor Login</Link>
              <Link to="/patients/login">Patient Login</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-image">
        <img src={healthwise} alt="Healthcare" />
      </div>
    </div>
  );
};

export default Home;
