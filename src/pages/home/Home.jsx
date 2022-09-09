import Featured from "../../components/featured/Featured";
//import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import gsap from "gsap";

const Home = ({username}) => {
  useEffect(()=>{
    gsap.fromTo (".homeTitle", {x:-100, opacity:0, }, {x:0, opacity:1, duration: 5});
    gsap.fromTo (".by", {z:100, opacity:0, }, {z:0, opacity:1, duration: 4});
    gsap.fromTo (".students", {y:-100, opacity:0, }, {y:0, opacity:1, duration: 4});
  },[]);
  return (
    <div>
      <Navbar username = {username}/>
      <div className="homeContainer">
        <h1 className="homeTitle">Browse <span className="by">by</span> campus</h1>
        <Featured/>
        <h1 className="homeTitle">Browse <span className="by">by</span> property type</h1>
        <PropertyList/>
        {/* <h1 className="homeTitle">Homes <span className="students">students</span> love</h1>
        <FeaturedProperties/> */}
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
