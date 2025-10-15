// src/lib/apiClient.ts
import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api",
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

// Centralized error handler
const handleApiError = (error: any) => {
  const status = error?.response?.status;
  const message =
    error?.response?.data?.error ||
    error?.response?.data?.message ||
    error.message ||
    "Unknown error";

  console.error(`[API ${status || "ERROR"}]: ${message}`);
  return Promise.reject({ status, message });
};

apiClient.interceptors.response.use(
  (response) => response,
  (error) => handleApiError(error)
);

export default apiClient;
