import React from 'react'
import "./confirmation.css";
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Confirmation = ({setUsername}) => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        fullname: undefined,
        adress: undefined,
        email: undefined,
        phone: undefined,
        modeofpayment: undefined,
    });
    const navigate = useNavigate();
    const handleChange = (e) => { setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}))};
    const handleClick = async (e) => {
        e.preventDefault();
        navigate("/");
        // try {
        //     await axios.post("https://hostel7booking.herokuapp.com/api/auth/register", credentials);
        //     setUsername(credentials.username);
        //     navigate("/");
        // } catch (error) {
        //     console.log("Sorry, confirmation failed");
        // }
    }

  return (
    <div className = "register">
        <div className = "rContainer">
            <input type="text" placeholder="fullname" id="fullname" onChange={handleChange} className="rInput" /> 
            <input type="adress" placeholder="address" id="address" onChange={handleChange} className="rInput" />
            <input type="phone" placeholder="phone" id="phone" onChange={handleChange} className="rInput" />
            <input type="modeofpayment" placeholder="mode of payment" id="modeofpayment" onChange={handleChange} className="rInput" />
            <div className="buttons">
                <button className='rButton'  onClick={handleClick}>Confirm</button> 
            </div>
        </div>
    </div>
  )
}

export default Confirmation;
