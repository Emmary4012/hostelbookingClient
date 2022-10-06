import "./mailList.css"
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const MailList = () => {
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
    <div className="mail">
      <h1 className="mailTitle">Save time, save money & save joules of energy!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <form className="mailInputContainer" ref={form} >
        <input type="text" name="email" placeholder="Your Email" />
        <button onClick={sendEmail}>Subscribe</button>
      </form>
      <span className="mailDesc">Expect updates & more properties very soon; not later than this week</span>
    </div>
  )
}

export default MailList