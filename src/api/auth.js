import axios from 'axios';

const API_URL = 'https://workify-backend-ro3w.onrender.com';

// Register funksiyasi
export const registerTalent = async (email, password) => {
  return axios.post(`${API_URL}/talent/register`, { email, password });
};

// Login funksiyasi
export const loginTalent = async (email, password) => {
  return axios.post(`${API_URL}/talent/login`, { email, password });
};
