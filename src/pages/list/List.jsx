import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import SearchItem from "../../components/searchItem/SearchItem";
import React from "react";
import useFetch from "../../hooks/useFetch";

const List = () => {
 
  const [destination, setDestination] = useState("");
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const {data, loading, error, reFetch} = useFetch(`https://hostel7booking.herokuapp.com/api/hotels?city=${destination}&min=${min||0}&max=${max||999}`)

console.log(data)
  const handleClick =()=>{
    reFetch()
  }

  return (
    <div>
      <Navbar />
       <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input  placeholder={destination} type="text"  onChange={(e) => {setDestination(e.target.value)}} />
            </div>
            
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" onClick={e=>setMin(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" onClick={e=>setMax(e.target.value)} className="lsOptionInput" />
                </div>
                
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
          {loading? "Loading" : <>
                {
                  data.map((item)=>(
                    <SearchItem key={item._id} item={item}/>
                  ))
                }
          </>}  
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
