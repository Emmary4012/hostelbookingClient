import "./confirmation.css";
import { useNavigate } from 'react-router-dom';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Confirmation = ({credentials, handleChange, dates, selectedRooms}) => {
    const navigate = useNavigate();
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();  
      emailjs.sendForm('service_shu8pua', 'template_59tphah', form.current, 'ZTa2DT5GQdHdVRVG3')
        .then((result) => {
            console.log(result.text);
            navigate("/");
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
   console.log(selectedRooms)
  return (
    <div className = "register">
        <div className = "rContainer">
            <div className="credentials">{credentials.username?<div>"You" {credentials.username}</div>: "You"} are {!selectedRooms?"trying to reserve an undefined":""} {selectedRooms&&"reserving"} room {selectedRooms&&selectedRooms} from {credentials.propertyName||"an undefined"} {credentials.propertyType||"property"} for {credentials.months||"undefined"} months</div>
            <div className="credentials">{!selectedRooms&&"Please specify your interest within the message box and submit."}</div>
            <form ref={form} onSubmit={sendEmail} className="form">
            <input type="text"  name="username" value={credentials.username} className="hidden" readOnly/> 
            <input type="text" name="propertyName" value={credentials.propertyName} className="hidden" readOnly/> 
            <input type="text" name="propertyType" value={credentials.propertyType} className="hidden" readOnly/> 
            <input type="text" name="price" value={credentials.price} className="hidden" readOnly/> 
            <input type="text" name="months" value={credentials.months} className="hidden" readOnly/> 
            <input type="text" name="startDate" value={dates[0].startDate} className="hidden" readOnly/> 
            <input type="text" name="endDate" value={dates[0].endDate} className="hidden" readOnly/> 
            <input type="text" name="selectedRooms" value={selectedRooms} className="hidden" readOnly/> 
            <input type="text" name="fullname" placeholder="fullname" id="fullname" onChange={handleChange} className="rInput" /> 
            <input type="text" name="email" placeholder="email" id="email" onChange={handleChange} className="rInput" /> 
            <input type="adress" name="address" placeholder="address" id="address" onChange={handleChange} className="rInput" />
            <input type="phone" name="phone" placeholder="phone" id="phone" onChange={handleChange} className="rInput" />
            <textarea type="text" name="message" placeholder="message" id="message" onChange={handleChange} className="rInput" />
            {credentials.propertyName&&<select type="modeofpayment" name="modeofpayment" placeholder="mode of payment" id="modeofpayment" onChange={handleChange} className="select" >
                <option value = "Mobile Money" className="options">Mobile Money</option>
            </select>}
            {credentials.propertyName&&<div className="text">Send only usx {credentials.price} to 0756444209 (EMMANUEL APITA) to receive a confirmation feedback</div>}
            <div className="buttons">
                <button className='rButton' type="submit" >Submit</button> 
                <button className='rButton' onClick={()=>{navigate("/")}}>Home</button> 
            </div>
            </form>
        </div>
    </div>
  )
}

export default Confirmation;
