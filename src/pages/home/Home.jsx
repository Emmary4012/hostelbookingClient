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
    gsap.fromTo (".c", { opacity:0, }, { opacity:1, duration: 3});
    gsap.fromTo (".browse", {x:-200, opacity:0, }, {x:0, opacity:1, duration: 4});
    gsap.fromTo (".by", { opacity:0, }, { opacity:1, duration: 7});
    gsap.fromTo (".lastword", {x:200, opacity:0, }, {x:0, opacity:1, duration: 5, ease: "back.out"});
  },[]);
  return (
    <div className="c">
      <Navbar username = {username}/>
      <div className="cover">
      <div className="homeContainer">
        <h1 className="homeTitle"><span className="browse">Browse</span> <span className="by">by</span> <span className="lastword">campus</span></h1>
        <Featured/>
        <h1 className="homeTitle"><span className="browse">Browse</span> <span className="by">by</span> <span className="lastword">property</span></h1>
        <PropertyList/>
        {/* <h1 className="homeTitle">Homes <span className="students">students</span> love</h1>
        <FeaturedProperties/> */}
        <MailList/>
        <Footer/>
      </div>
      </div>
    </div>
  );
};

export default Home;
