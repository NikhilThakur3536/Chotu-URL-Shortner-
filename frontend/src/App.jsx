import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {Login} from "./components/Login";
import {SignUp} from "./components/SignUP";
import {Home} from "./components/Home";
import { UserAcDashboard } from "./components/UserAcDashboard";
import './index.css'
import Logout from "./components/Logout";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Sign Up Route */}
        <Route path="/signup" element={<SignUp />} />

        {/* Home Route */}
        <Route path="/home" element={<Home />} />

        {/* User Account Dashboard Route */}
        <Route path="/account" element={<UserAcDashboard/>}/>

        {/* Redirect to Login by default */}
        <Route path="*" element={<Navigate to="/signup"/>} />

        {/* Redirect to the Logout */ }
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};

export default App;
