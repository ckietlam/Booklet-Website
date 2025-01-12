import axios from 'axios';

// Create a store for the token that works in Node.js
class TokenStore {
  constructor() {
    this.token = null;
  }

  getToken() {
    return this.token;
  }

  setToken(token) {
    this.token = token;
  }

  removeToken() {
    this.token = null;
  }
}

const tokenStore = new TokenStore();

export const axiosClient = axios.create({
  baseURL: process.env.VITE_API_URL, // Note: Changed to process.env
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

// Add token to requests if it exists
axiosClient.interceptors.request.use(config => {
  const token = tokenStore.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      tokenStore.removeToken();
      // Instead of redirecting (which doesn't make sense in Node.js),
      // we'll throw an authentication error
      throw new Error('Authentication failed');
    }
    return Promise.reject(error);
  }
);

// Export methods to manage the token
export const setAuthToken = (token) => tokenStore.setToken(token);
export const removeAuthToken = () => tokenStore.removeToken();
export const getAuthToken = () => tokenStore.getToken();