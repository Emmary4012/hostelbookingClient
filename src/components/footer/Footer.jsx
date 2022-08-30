import "./footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Campuses</li>
          <li className="fListItem">Villages</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Hostels </li>
          <li className="fListItem">Apartments </li>
          <li className="fListItem">Rentals </li>
          <li className="fListItem">Hotels</li>
          <li className="fListItem">Recreation Centers</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Unique places to stay </li>
          <li className="fListItem">Reviews</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Curtomer Service</li>
          <li className="fListItem">Recover Campus Lost Item</li>
          <li className="fListItem">Chat With Campusers</li>
          <li className="fListItem">Terms & Conditions</li>
        </ul>
        <ul className="fList">
	          <li className="fListItem">0773776410</li>
	          <li className="fListItem">emmanuelapita12@gmail.com</li>
	          <li className="fListItem">0756444209</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 Hostelbooking.</div>
    </div>
  );
};


export default Footer;
