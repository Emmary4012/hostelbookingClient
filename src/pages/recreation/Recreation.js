import "./recreation.css";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import React from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";

const Recreation = ({ credentials, dates, setDates}) => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({game: undefined, days: undefined, breakfast: undefined, lunch: undefined, supper: undefined});
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({ adults: 1, children: 0, rooms: 1,});
  const navigate = useNavigate();
  const images = [
    
    "https://res.cloudinary.com/emmanuel1240/image/upload/v1663272110/upload/11_coibzl.jpg",
    "https://res.cloudinary.com/emmanuel1240/image/upload/v1663272084/upload/7_sdvxxv.jpg",
    "https://res.cloudinary.com/emmanuel1240/image/upload/v1663272073/upload/6_o3tg4k.jpg",

    "https://res.cloudinary.com/emmanuel1240/image/upload/v1663272106/upload/10_kkiup6.jpg",
    "https://res.cloudinary.com/emmanuel1240/image/upload/v1663272087/upload/3_bp9tqp.jpg",
    "https://res.cloudinary.com/emmanuel1240/image/upload/v1663272086/upload/5_xgjxic.jpg",

    "https://res.cloudinary.com/emmanuel1240/image/upload/v1663272113/upload/1_meple9.jpg",
    "https://res.cloudinary.com/emmanuel1240/image/upload/c_crop,h_750,w_1000/v1663272099/upload/2_xm9set.jpg",
    "https://res.cloudinary.com/emmanuel1240/image/upload/v1663272108/upload/12_aoxwll.jpg",
    

    "https://res.cloudinary.com/emmanuel1240/image/upload/v1663272091/upload/4_udpqsk.jpg",
    "https://res.cloudinary.com/emmanuel1240/image/upload/v1663272093/upload/9_ioqifa.jpg",
    "https://res.cloudinary.com/emmanuel1240/image/upload/c_crop,h_540,w_540/v1663560976/upload/8_c6brhp.jpg"    
  ]
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {...prev,[name]: operation === "i" ? options[name] + 1 : options[name] - 1, };
    });
  };
  
  const handleClick =()=>{
      Object.assign(credentials, {propertyName: data.name, propertyType: data.type, price: data.cheapestPrice})
      navigate("/skyconfirmation");
    }
    
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber)
  };

  return (
    <div className="header">
      <Navbar username = {credentials.username}/>
      <div className="cover">
             <div className="headerSearch">

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => {setDates([item.selection])}}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adults} adult · ${options.children} children · ${options.rooms} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adults</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adults <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adults", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adults}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick= {() => handleOption("adults", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick= {() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Rooms</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.rooms <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("rooms", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.rooms}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("rooms", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
            </div>
            </div>
     
        <div className="hotelContainer">
            {open && (
              <div className="slider">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="close"
                  onClick={() => setOpen(false)}
                />
                <FontAwesomeIcon
                  icon={faCircleArrowLeft}
                  className="arrow"
                  onClick={() => handleMove("l")}
                />
                <div className="sliderWrapper">
                  <img src={data.img[slideNumber]} alt="" className="sliderImg" />
                </div>
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="arrow"
                  onClick={() => handleMove("r")}
                />
              </div>
            )}
            <div className="hotelWrapper">
              <button className="bookNow" onClick={handleClick}>Reserve or Book Now!</button>
              <h1 className="hotelTitle">SKY BLISS</h1>
              <div className="hotelAddress">
                <FontAwesomeIcon icon={faLocationDot} />
                <span> Kikoni B</span>
              </div>
              <span className="hotelDistance">
                About 500m from Sir Apollo Rd
              </span>
              {/* <span className="hotelPriceHighlight">
                <div>Book a day stay which costs a minimum of only usx at Sky Bliss</div> 
              </span> */}
              <div className="hotelImages">
                {images?.map((photo, i) => (
                  <div className="hotelImgWrapper" key={i}>
                    <img onClick={() => handleOpen(i)} src={photo} alt="Come and Have fun" className="hotelImg" />
                  </div>
                ))}
              </div>
              <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                  <h1 className="hotelTitle">ADVENTURE PARK!</h1>
                  <p className="hotelDesc">
                    We offer the following games and sports
                  </p>
                </div>
              </div>
              <div className="fLists">
                <ul className="fList">
                  <span className="lsTitle">High Rope Course Games</span>
                  <li className="fListItem">Ninja Warrior (High Rope Climbing)</li>
                  <li className="fListItem">Ziplining</li>
                </ul>
                <ul className="fList">
                  <span className="lsTitle">Team Building Activities</span>
                  <li className="fListItem">Sack Racing</li>
                  <li className="fListItem">Water Bottle Filling</li>
                  <li className="fListItem">Tyre Challenges</li>
                  <li className="fListItem">Treasure Hunting</li>
                </ul>
                <ul className="fList">
                  <span className="lsTitle">Gardens</span>
                  <li className="fListItem">Birthday Parties</li>
                  <li className="fListItem">Graduation Parties</li>
                  <li className="fListItem">Bridal Showers</li>
                  <li className="fListItem">Baby Showers</li>
                  <li className="fListItem">Introduction Meetings</li>
                  <li className="fListItem">Wedding Meetings</li>
                 
                </ul>
                <ul className="fList">
                  <span className="lsTitle">Intellectual Services</span>
                  <li className="fListItem">Financial Literacy Workshops</li>
                  <li className="fListItem">Inspirational Seminars</li>
                </ul>
                <ul className="fList">
                  <span className="lsTitle">Corporate Meetings' Space</span>
                  <li className="fListItem">Financial Literacy Workshops</li>
                  <li className="fListItem">Inspirational Seminars</li>
                </ul>
                <ul className="fList">
                  <span className="lsTitle">In-Door Games</span>
                  <li className="fListItem">Chess</li>
                  <li className="fListItem">Ludo</li>
                  <li className="fListItem">Snakes & Ladder</li>
                  <li className="fListItem">Checkers</li>
                </ul>
              </div>
              <div className="hotelDetailsPrice">
                  {/* <h3> Prices </h3> */}
                  <button onClick={handleClick}>Reserve or Book Now!</button>
                  <button onClick={()=>{navigate("/")}}>Home</button> 
                </div>
            </div>
          </div>
       
    </div>
  );
};

export default Recreation;
