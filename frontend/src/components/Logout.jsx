import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    
    localStorage.removeItem("token"); 
    sessionStorage.clear(); 

    // Redirect to login page
    navigate("/login");
  }, [navigate]);

  return null; 
}

export default Logout;
