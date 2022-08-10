import "./navbar.css"
import React from "react";
import {Link, useNavigate} from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit", textDecoration: "none"}}>
        <span className="logo">lamabooking</span>
        </Link>
        <div className="navItems">
          <Link to="/hotels" style={{color:"inherit", textDecoration: "none"}}>
          <span className="logo">Hotels</span>
          </Link>
          <button className="navButton" onClick={()=>navigate("/register")}>Register</button>
          <button className="navButton" onClick={()=>navigate("/login")}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar