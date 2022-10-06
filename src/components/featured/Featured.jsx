import "./featured.css";
import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const Featured = () => {
  const {data, loading, error} = useFetch("https://hostel7booking.herokuapp.com/api/hostels/countByCampuses?campuses=MUK,KYU,MUBS")
  const navigate = useNavigate();

  useEffect(()=>{
    gsap.fromTo (".featuredItem.one", {x:-200, opacity:0, }, {x:0, opacity:1, duration: 5, ease: "bounce.out",});
    gsap.fromTo (".featuredItem.two", { opacity:0, }, { opacity:1, duration: 10 });
    gsap.fromTo (".featuredItem.three", {x:200, opacity:0, }, {x:0, opacity:1, duration: 7, ease: "back.out"});
  },[]);

  return (
    <div className="featured">
      {loading? "Loading, please wait":<>

      <div className="featuredItem one" title="Around Makerere University Main Campus" onClick={()=>{navigate("/properties/hostels")}}>
        <img src="https://res.cloudinary.com/emmanuel1240/image/upload/v1662467970/upload/Courts_1_boge8k.jpg"
          alt="" className="featuredImg"
        />
        <div className="featuredTitles">
          <h1 title="Makerere University Main Campus">MUK</h1>
          <h2>{data[0]} Hostels</h2>
        </div>
      </div>
      
      <div className="featuredItem two" title="Around Kyambogo University" onClick={()=>{navigate("/properties/hostels", {state: "KYU"})}}>
        <img src = "https://res.cloudinary.com/emmanuel1240/image/upload/v1663415564/upload/1_krnbd0.jpg"
          alt="" className="featuredImg"
        />
        <div className="featuredTitles">
          <h1 title="Kyambogo University">KYU</h1>
          <h2> {data[1]} Hostels</h2>
        </div>
      </div>

      <div className="featuredItem three" title="Around Makerere University Business School">
        <img src="https://res.cloudinary.com/emmanuel1240/image/upload/v1663403099/upload/12_jn5qa4.jpg"
          alt="" className="featuredImg"
        />
        <div className="featuredTitles">
          <h1 title="Makerere University Business School"><bdo dir="rtl">SBUM</bdo></h1>
          <h2 style={{opacity: 0}}>`</h2>
        </div>
      </div>
      
      </>}
    </div>
    
  );
};

export default Featured;