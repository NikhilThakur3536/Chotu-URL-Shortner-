import { useState } from "react";
import axios from "axios";

// Custom Hook
export function useUserLogin() {
  const authApiUrl = import.meta.env.VITE_AUTH_API_URL; // Use VITE_ prefix for Vite projects
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${authApiUrl}/login`, { email, password });
      console.log(response.data);
      setIsLoading(false);

      // Extract token from response
      const token = response.data.token;
      return token;
    } catch (err) {
      console.error("Login Failed:", err);
      setError(err);
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
}
