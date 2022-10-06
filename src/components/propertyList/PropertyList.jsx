import "./propertyList.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PropertyList = () => {
  const img = [
    "https://res.cloudinary.com/emmanuel1240/image/upload/c_crop,h_1400,w_2551/v1662464002/upload/MISH_1_xthrcs.jpg",
    "http://res.cloudinary.com/emmanuel1240/image/upload/v1663265921/upload/nhnkeqhzefxkcpkqrm11.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWk48BFrZJVqhNwTnotY4aeq5vCueEgTye6g&usqp=CAU",
    "https://res.cloudinary.com/emmanuel1240/image/upload/v1663272110/upload/11_coibzl.jpg"
  ]
  const navigate = useNavigate();
  
  return (
    <div className="pList" onClick={()=>{navigate("/properties/hostels")}}>
      <div className="pListItem">
        <img src={img[0]} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hostels</h1>
          <h2>16 Hostels</h2>
        </div>
      </div>         
      <div className="pListItem" onClick={()=>{navigate("/properties/rentals")}}>
        <img src={img[1]} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Rentals</h1>
          <h2>3 Rentals</h2>
        </div>
      </div>         
      <div className="pListItem">
        <img src={img[2]} alt="" className="pListImg" onClick={()=>{navigate("/")}}/>
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2 style={{opacity: 0}}>Null</h2>
        </div>
      </div>  

      <div className="pListItem p4" onClick={()=>{navigate("/recreation")}}>
        <Link to="/recreation" className="navLink">
        <img src={img[3]} alt="" className="pListImg" />
        <div className="pListTitles" >
          <h1>Recreation Centres</h1>
          <h2>Sky Bliss</h2>
        </div>
        </Link>
      </div>         

    </div>
    );
}
export default PropertyList;
