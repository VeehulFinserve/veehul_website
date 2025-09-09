// api.js
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || "http://localhost:8000"; // fallback

console.log("Loaded API baseURL:", baseURL);

const API = axios.create({
  baseURL: baseURL + '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;