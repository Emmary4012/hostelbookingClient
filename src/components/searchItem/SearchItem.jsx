import "./searchItem.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const SearchItem = ({item}) => {

  useEffect(()=>{
    gsap.fromTo (".searchItem", {x:200, opacity:0, }, {x:0, opacity:1, duration: 3, ease: "bounce.out",});
  },[]);
  
  return (
    <div className="searchItem">
      {item.img && <img src={item.img[0]} alt="Hotel Image" className="siImg"/>}
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">About {item.distance}</span>
        <span className="siFeatures">
          {item.desc.substring(0, 200)}....
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Stars</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">Starting from usx {item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/properties/${item.type}s/${item._id}`}>
          <button className="siCheckButton">See Availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
