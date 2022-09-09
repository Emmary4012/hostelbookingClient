import "./care.css";
import React, { useRef } from 'react';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import emailjs from '@emailjs/browser';

const Care = ({ credentials}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();  
    emailjs.sendForm('service_shu8pua', 'template_3pajayb', form.current, 'ZTa2DT5GQdHdVRVG3')
      .then((result) => {
          console.log(result.text);
          alert("Thanks for your interest");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className = "care">
      <Navbar username ={credentials.username}/>
      <div className = "careContainer">
        <div className = "service">
          <p>Please contact 0756444209 / 0773776410 for more details or you can send an email using the form below.</p>
          <form className="form" ref={form} >
            <textarea type="text" name="message" placeholder="Your Message" className="finput"/>
            <input type="text" name="email" placeholder="Your Email" className="finput"/>
            <button onClick={sendEmail}>Send</button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Care;
