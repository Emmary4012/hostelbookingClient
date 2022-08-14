import "./propertyList.css";
import React from "react";
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {

  const {data, loading, error} = useFetch("https://hostel7booking.herokuapp.com/api/hotels/countByType")
  const images = [
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
  ]

  return (
    <div className="pList">
      {loading? "Loading":
      <>
            {data && images.map((img, i)=>(
                <div className="pListItem" key={i}>
                  <img src={img} alt="" className="pListImg" />
                  <div className="pListTitles">
                    <h1>{data[i]?.type}hjk</h1>
                    <h2>{data[i]?.count} {data[i]?.type}</h2>
                  </div>
                </div>
            ) ) }
      </>
      }
    </div>
    );
}
export default PropertyList;
