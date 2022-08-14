import "./featuredProperties.css";
import React from "react";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const {data, loading, error} = useFetch("https://hostel7booking.herokuapp.com/api/hotels/countByCity?featured")
  console.log(data)
  return (
    <div className="fp">
      {loading? "Loading, please wait": <> 
        {data.map((item)=>(
           <div className="fpItem" key={item._id}>
           <img src={item.photos[0]} alt="Image" className="fpImg" />
           <span className="fpName">{item.name}</span>
           <span className="fpCity">{item.city}</span>
           <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
           {item.rating&&<div className="fpRating">
             <button>{item.rating}</button>
             <span>Excellent
             </span>
           </div>}
         </div>
        ))
        }
      </>}
    </div>
  );
};

export default FeaturedProperties;
