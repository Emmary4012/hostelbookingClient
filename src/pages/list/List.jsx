import "./list.css";
import { useState } from "react";
import SearchItem from "../../components/searchItem/SearchItem";
import React from "react";
import useFetch from "../../hooks/useFetch";
import Navbar from "../../components/navbar/Navbar";

const List = ({username, institutions, villages}) => {
 
  const [campus, setCampus] = useState();
  const [village, setVillage] = useState();
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const {data, loading, error, reFetch} = useFetch(`https://hostel7booking.herokuapp.com/api/hostels?campus=${campus||"MUK"||"MUBS"}&village=${village||"Kikoni B"}&min=${min||0}&max=${max||9999999}`);
  
  const handleClick =()=>{
    reFetch()
  }

  return (
    <div>
       <Navbar username = {username}/>
       <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Campus</label>
              {/* <input  placeholder="Enter MUK/KYU/MUBS/..." type="text"  onChange={(e) => {setCampus(e.target.value)}} /> */}
              <select id="institutions" onChange={(e) => {setCampus(e.target.value)}} className="select">
                  {institutions.map((campus,i) => (
                        <option key={i} value={campus}>
                          {campus}
                        </option>
                      ))}
                </select>
            </div>
            <div className="lsItem">
              <label>Village</label>
              {/* <input  placeholder="Kikoni B, Wandegeya, Kireka, Nakawa" type="text"  onChange={(e) => {setVillage(e.target.value)}} /> */}
              <select id="villages" onChange={(e) => {setVillage(e.target.value)}} className="select">
                  {villages.map((village,i) => (
                        <option key={i} value={village}>
                          {village}
                        </option>
                      ))}
                </select>
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per month</small>
                  </span>
                  <input type="number" placeholder="0" onChange={e=>setMin(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per month</small>
                  </span>
                  <input type="number" placeholder="9999999" onChange={e=>setMax(e.target.value)} className="lsOptionInput" />
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
