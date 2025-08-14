import axios from 'axios';

const axiosInstance = axios.create({
  // Use your local backend URL or keep it empty for relative paths
  baseURL: 'http://localhost:5000/api', // Change port if needed
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
