// src/services/authService.ts
import axios from "axios";

const API_URL = "https://crowdfunding-backend-ehc7.onrender.com/api/auth"; // adjust to your backend URL

export const register = async (userData: any) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const login = async (userData: any) => {
  return axios.post(`${API_URL}/login`, userData);
};
