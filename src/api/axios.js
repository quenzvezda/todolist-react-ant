import axios from 'axios';
import { API_BASE_URL } from '../utils/config';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to include the auth token in every request
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken'); // Assume the token is stored in local storage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;
