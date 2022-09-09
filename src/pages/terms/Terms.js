import "./terms.css";
import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const Terms = ({ credentials}) => {
   
  return (
    <div className = "terms">
        <Navbar username ={credentials.username}/>
          <h2>Terms & Conditions</h2>
          <div className = "termsContainer">
            <ul>
              <li>From facility owners, we only ask for details to be loaded onto the system.</li>
              <li>Entering facility details is open to any one as long as the information being entered is genuine. Visit   
                the <a href="https://hostel-booking-admin.netlify.app/" target="_blank" rel="noreferrer" title="Go to the Admin Dashboard">admin dashboard.</a></li>
              <li>Clients are charged for using the application.</li>
              <li>For booking hostels, the clients are charged 1.5% of the least semester fee charged by a particular hostel a client
                wishes to book
                while for rentals and apartments the clients are charged 5% of the least monthly fee charged by the facility being booked.</li>
              <li>When one submits a booking request, they are expected to wait within 24hrs before receiving a feedback.</li>
              <li>Booking fee will be returned incase the booking attempt is unsuccessful. Check on our <Link to="/care" title="Go to Customer Care Service">customer care service.</Link></li>
              <li style={{color:"red"}}>Note that we do not receive money on behalf of any facility. </li>
            </ul>
            <Footer />
          </div>
    </div>
  )
}

export default Terms;
