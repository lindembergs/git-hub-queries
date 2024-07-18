// src/services/api.jsx
import axios from "axios";

const token = import.meta.env.VITE_CREDENTIAL_TOKEN;

export const requestHeaders = () => ({
  headers: {
    Authorization: `Bearer${token}`,
  },
});

export const api = axios.create({
  baseURL: "https://api.github.com",
});
