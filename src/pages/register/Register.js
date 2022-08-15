import React from 'react'
import "./register.css";
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        email: undefined,
        password: undefined,
    });
    const navigate = useNavigate();
    const handleChange = (e) => { setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}))};
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://hostel7booking.herokuapp.com/api/auth/register", credentials);
            console.log("Registered successfully");
            // navigate("/")
        } catch (error) {
            console.log("Register failed");
        }
    }

  return (
    <div className = "register">
        <div className = "rContainer">
            <input type="text" placeholder="username" id="username" onChange={handleChange} className="rInput" /> 
            <input type="email" placeholder="email" id="email" onChange={handleChange} className="rInput" />
            <input type="password" placeholder="password" id="password" onChange={handleChange} className="rInput" />
            <div className="buttons">
                <button className='rButton'  onClick={handleClick}>Register</button> 
                <span className='sButton'>OR</span>
                <button className='rButton'>
                     <Link to="/login" style={{color:"inherit", textDecoration: "none"}}>
                        <span >Login</span>
                    </Link>
                </button> 
            </div>
            {/* {err && <span>{err.message}</span>} */}
        </div>
    </div>
  )
}

export default Login;
