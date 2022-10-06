import "./footer.css";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem"><Link to="/properties/hostels" className="navLink"><span className="book">Hostels</span></Link></li>
          <li className="fListItem"><Link to="/" className="navLink"><span className="book">Apartments</span></Link> </li>
          <li className="fListItem"><Link to="/properties/rentals" className="navLink"><span className="book">Rentals</span></Link></li>
        </ul>
        <ul className="fList">
          <li className="fListItem"><Link to="/" className="navLink"><span className="book">Hotels</span></Link></li>
          <li className="fListItem"><Link to="/recreation" className="navLink"><span className="book">Recreation Centres</span></Link></li>
          <li className="fListItem">Unique places to stay </li>
        </ul>
        {/* <ul className="fList">
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Recover Campus Lost Item</li>
          <li className="fListItem">Chat With Campusers</li>
        </ul> */}
        <ul className="fList">
          <li className="fListItem"><Link to="/about" className="navLink"><span className="book">About the App</span></Link></li>
          <li className="fListItem"><Link to="/terms" className="navLink"><span className="book">Terms & Conditions</span></Link></li>
          <li className="fListItem"><Link to="/care" className="navLink"><span className="book">Curtomer Care Service</span></Link></li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 Dither Tech.</div>
    </div>
  );
};

export default Footer;
