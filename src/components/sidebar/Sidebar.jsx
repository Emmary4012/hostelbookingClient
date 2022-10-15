import React from "react";
import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import { Link } from "react-router-dom";

const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="top"><Link to="/admin" className="lin"><span className="log">Hostel Booking Admin</span></Link></div>
      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li><DashboardIcon className="icon" /><span>Dashboard</span></li>
          <p className="title">LISTS</p>
          <Link to="/admin/users" className="lin"><li><PersonOutlineIcon className="icon" /><span>Users</span></li></Link>
          <Link to="/admin/properties/hostels" className="lin"><li><StoreIcon className="icon" /><span>Hostels</span></li></Link>
          <Link to="/admin/properties/apartments" className="lin"><li><StoreIcon className="icon" /><span>Apartments</span></li></Link>
          <Link to="/admin/properties/rentals" className="lin"><li><StoreIcon className="icon" /><span>Rentals</span></li></Link>
          <Link to="/admin/property/rooms" className="lin"><li><StoreIcon className="icon" /><span>Rooms</span></li></Link>
        </ul>
      </div>
    </div>
  );

};

export default Sidebar;
