import "./navbar.css"
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || undefined;
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" className="navLink">
        <span className="logo" >Hostelbooking</span>
        </Link>
        <div className="navItems">
          <div className="navItem">
            <div className="navLinks" onClick={() => {setOpen(!open)}}> Book
             {open && <div className="linksdropdown">
              <Link to="/properties/hostels" className="navLink"><span className="book">Hostel</span></Link>
              <Link to="/properties/rentals" className="navLink"><span className="book">Rental</span></Link>
              <Link to="/" className="navLink"><span className="book">Apartment</span></Link>
             </div>}
            </div>
          </div>
          <div className="navItem">
            {username? <button className="navUsername r">{username}</button>:<button className="navButton" onClick={()=>navigate("/register")}>Register</button>}
          </div>
          <div className="navItem">
            {username? <button className="navButton" onClick={()=>navigate("/login")}>Logout</button>:<button className="navButton" onClick={()=>navigate("/login")}>Login</button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar