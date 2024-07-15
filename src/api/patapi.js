// src/api/patientApi.js
import axios from 'axios';

export const createPatient = (patient) => {
  return axios.post('/api/patients/register', patient);
};

export const loginPatient = (credentials) => {
  return axios.post('/api/patients/login', credentials);
};
