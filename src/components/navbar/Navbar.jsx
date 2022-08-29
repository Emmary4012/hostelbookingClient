import "./navbar.css"
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {gsap} from "gsap";
import { useEffect} from "react";

const Navbar = ({username}) => {
  let logoItem = (null);
  const navigate = useNavigate();
  useEffect(()=>{
    gsap.fromTo (".logo", {z:-100, opacity:0, }, {z:10, opacity:1, duration: 5});
    
  },[]);
  
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit", textDecoration: "none"}}>
        <span className="logo">Hostelbooking</span>
        </Link>
        <div className="navItems">
          <Link to="/hostels" className="navItem" style={{color:"inherit", textDecoration: "none"}}>
          <span className="logo">Hostels</span>
          </Link>
          {username? <button className="navUsername">{username}</button>:<button className="navButton" onClick={()=>navigate("/register")}>Register</button>}
          {username? <button className="navButton" onClick={()=>navigate("/login")}>Logout</button>:<button className="navButton" onClick={()=>navigate("/login")}>Login</button>}
        </div>
      </div>
    </div>
  )
}

export default Navbar