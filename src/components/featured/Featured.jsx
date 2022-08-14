import "./featured.css";
import React from "react";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
//import axios from "axios";

const Featured = () => {
  const {data, loading, error} = useFetch("https://hostel7booking.herokuapp.com/api/hotels/countByCity?cities=berlin,madrid,london")

  return (
    <div className="featured">
      {loading? "Loading, please wait":<><div className="featuredItem">
        <img
         
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
          
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
         // src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
         src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
          
         alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>{data[1]}  properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
         // src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
         src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
          
         alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>{data[2]}  properties</h2>
        </div>
      </div></>}
    </div>
    
  );
};

export default Featured;
