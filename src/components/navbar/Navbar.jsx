import "./navbar.css"
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {gsap} from "gsap";
import { useEffect} from "react";
import { useState } from "react";

const Navbar = ({username}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>{
    gsap.fromTo (".logo", {z:-100, opacity:0, }, {z:10, opacity:1, duration: 5});
  },[]);
  
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
              <Link to="/hostels" className="navLink"><span className="book">Hostel</span></Link>
              <Link to="/rentals" className="navLink"><span className="book">Rental</span></Link>
              <Link to="/apartments" className="navLink"><span className="book">Apartment</span></Link>
              {/* <Link to="/hotels" className="navLink"><span className="book">Hotels</span></Link>
              <Link to="/recreationCenters" className="navLink"><span className="book">Recreation Centers</span></Link> */}
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