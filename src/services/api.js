import axios from "axios";

// Base URL for your backend
const API_BASE_URL = "http://localhost:8080"; 

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const setAuthToken = (token) => {
  if (token) {
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common["Authorization"];
  }
};

// API Service
const apiService = {
  get: async (endpoint, userId, token) => {
    try {
      setAuthToken(token);
      const response = await apiClient.get(endpoint, { params: { id: userId }});
      return response?.data;
    } catch (error) {
      return handleError(error);
    }
  },
  
  post: async (endpoint, data, token) => {
    try {
      setAuthToken(token);
      const response = await apiClient.post(endpoint, data);
      return response?.data;
    } catch (error) {
      return handleError(error);
    }
  },
  
  put: async (endpoint, data, token) => {
    try {
      setAuthToken(token);
      const response = await apiClient.put(endpoint, data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },
  
  delete: async (endpoint, token) => {
    try {
      setAuthToken(token);
      const response = await apiClient.delete(endpoint);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },
};

// Error handling
const handleError = (error) => {
  console.error("API call error:", error);
  if (error.status === 404 && error.config.url === '/user/get') return null
  return error.response ? error.response.data : new Error("Network error");
};

export default apiService;
