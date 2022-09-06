import "./about.css";
import { useNavigate } from 'react-router-dom';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const About = ({handleChange, username}) => {
    const navigate = useNavigate();
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();  
      emailjs.sendForm('service_shu8pua', 'template_59tphah', form.current, 'ZTa2DT5GQdHdVRVG3')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
   
  return (
    <div className = "about">
        <div className = "aboutContainer">
          <Navbar username ={username}/>
          <div className = "aboutItems">
            <div className = "aboutItem">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCVLv4DgIQLh2MUDkOd-Hhl7OpFClpfQKezQ&usqp=CAU" alt="logo" className="aboutItemImg" />
            </div>
            <div className = "aboutItem">
              <p>I have met different youths especially students anxiously looking for places of accomodation.
                Some of them hoped in me since I have been around campus for quite along time.
                As I practiced my javascript knowledge, I got inspired to create an application not just for myself, 
                but also to help many others escape the anxiety of looking for a place of accomodation. 
                Let me take you through some of the benefits of this application. 
              </p>
            </div>
         
            <div className = "aboutItem">
              <ul className="aList">
                <li>Time required to move from one facility to another trying to make comparisons before making a choice, is saved. </li> <br/>
                <li>Resources are saved. One is no longer expected to burden themselves 
                  spending and moving from one facility to another in an attempt to make a better choice.</li> <br/>
                <li>One has time and a great atmosphere to make a perfect choice.</li> <br/>
              </ul>
            </div>
            <div className = "aboutItem">
             <ul className="aList">
              <li>It is less tiresome. The much manual movements one makes hoping to find a better option, is escaped.</li> <br/>
              <li>It publicizes even the more hidden facilities therefore creating a good sample space where choices can be drawn from.</li> <br/>
              <li>One certainly escapes the anxiety of looking for a place of accomodation.</li> <br/>
             </ul>
            </div>
         
            <div className = "aboutItem">
              <p className="theme">Together</p>
              <p className="theme">We</p>
              <p className="theme">Can</p>
            </div>
            <div className = "aboutItem">
              <div className = "aboutItemForm">
                <span>Please, share with us your experience. Your feed back encourages and helps us to make improvements.</span>
                <form ref={form} onSubmit={sendEmail} className="form">
                  <input type="text"  name="username" className="hidden" readOnly/>
                  <textarea type="text" name="message" placeholder="message" id="message" onChange={handleChange} className="rInput" /> 
                  <input type="text" name="email"  placeholder="email" id="email" onChange={handleChange} className="rInput" /> 
                  <div className="buttons">
                    <button className='rButton' type="submit" >Submit</button> 
                    <button className='rButton' onClick={()=>{navigate("/")}}>Back to Home</button> 
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
    </div>
  )
}

export default About;
