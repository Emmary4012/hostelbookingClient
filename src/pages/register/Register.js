import React from 'react'
import "./register.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";

const Register = ({credentials, handleChange}) => {
    
    const navigate = useNavigate();
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://hostel7booking.herokuapp.com/api/auth/register", 
            {username: credentials.username, email: credentials.email, password: credentials.password});
            navigate("/login");
        } catch (error) {
            console.log("Sorry, registration failed. Please, try again.");
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
        </div>
    </div>
  )
}

export default Register;
