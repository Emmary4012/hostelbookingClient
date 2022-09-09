import "./featured.css";
import React from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const {data, loading, error} = useFetch("https://hostel7booking.herokuapp.com/api/hostels/countByCampuses?campuses=MUK,KYU,MUBS")
  const navigate = useNavigate();
  return (
    <div className="featured">
      {loading? "Loading, please wait":<>

      <div className="featuredItem" title="Around Makerere University Main Campus" onClick={()=>{navigate("/hostels")}}>
        <img src="https://res.cloudinary.com/emmanuel1240/image/upload/v1662467970/upload/Courts_1_boge8k.jpg"
          alt="" className="featuredImg"
        />
        <div className="featuredTitles">
          <h1 title="Makerere University Main Campus">MUK</h1>
          <h2>{data[0]} Hostels</h2>
        </div>
      </div>
      
      {data[1]>0 && <div className="featuredItem" title="Around Kyambogo University">
        <img src ="https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR77u5FNpgGQeLpBZWeZ_BhX7wtaF5Ry7MiXA&usqp=CAU"
          alt="" className="featuredImg"
        />
        <div className="featuredTitles">
          <h1 title="Kyambogo University">KYU</h1>
          <h2> {data[1]} Hostel</h2>
        </div>
      </div>}

      {data[2]>0 && <div className="featuredItem" title="Around Makerere University Business School">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVotTEh8H9-ttHXV5IbwLSswacj5hll412cw&usqp=CAU"
          alt="" className="featuredImg"
        />
        <div className="featuredTitles">
          <h1 title="Makerere University Business School"><bdo dir="rtl">SBUM</bdo></h1>
          <h2>{data[2]} Hostel</h2>
        </div>
      </div>}
      
      </>}
    </div>
    
  );
};

export default Featured;

// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCVLv4DgIQLh2MUDkOd-Hhl7OpFClpfQKezQ&usqp=CAU"