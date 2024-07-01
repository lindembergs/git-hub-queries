// src/services/api.jsx
import axios from "axios";

const token = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;
console.log("Token:", token);

export const requestHeaders = () => ({
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "BergChallenge",
  },
});

export const api = axios.create({
  baseURL: "https://api.github.com",
});

// export const getUserData = async (user) => {
//   try {
//     const response = await api.get(`/users/${user}`, requestHeaders());
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
