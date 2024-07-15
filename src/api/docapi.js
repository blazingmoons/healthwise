// src/api/doctorApi.js
import axios from 'axios';

export const createDoctor = (doctor) => {
  return axios.post('/api/doctors/register', doctor);
};

export const loginDoctor = (credentials) => {
  return axios.post('/api/doctors/login', credentials);
};
