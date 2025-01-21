import { useState } from "react";
import axios from "axios";

// Custom Hook
export const useSignup = () => {
  const authApiUrl = import.meta.env.VITE_AUTH_API_URL; // Use VITE_ prefix for Vite
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (email, password, username) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${authApiUrl}/signup`, { email, password, username });
      // console.log("Sign Up successful:", response.data);
      setIsLoading(false);

      // Return data (e.g., user info or token)
      return response.data;
    } catch (err) {
      console.error("Sign Up failed:", err);
      setError(err);
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
