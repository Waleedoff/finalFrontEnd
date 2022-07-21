import React, { useEffect } from 'react'
import Login from './Login'
// import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
function Logout() {
  
    const navigate = useNavigate();
    useEffect(()=>(
        localStorage.clear(),
        navigate('/Login')
    ))
    
  return (
    <div>
  
    </div>
  )
}

export default Logout