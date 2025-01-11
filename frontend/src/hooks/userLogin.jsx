import { useState } from "react";
import axios from "axios";

export function userLogin(){
    const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

   const login= async(email,password)=>{
        setIsLoading(true);
        try{
            const response = await axios.post("http://localhost:3000/auth/login",{email,password})
            console.log(response.data)
            setIsLoading(false);
            const token = response.data.token;
            return token; 
        }catch(error){
            console.error("Login Failed")
            setError(error);
            setIsLoading(false);
        }
   }
   return {login, isLoading,error };
}