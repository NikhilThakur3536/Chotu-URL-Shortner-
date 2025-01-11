// useLogin.js
import { useState } from 'react';
import axios from 'axios';

export const userSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (email, password,username) => {
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/auth/signup', { email, password,username });
      console.log('Sign Up successful:', response.data);
      setIsLoading(false);
      return response.data;  // Return user data or token if needed
    } catch (error) {
      console.error('Sign Up failed:');
      setError(error);
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error};
};
