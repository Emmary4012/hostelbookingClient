import "./hostel.css";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
  faCalendarDays,
  faPerson,
  faWhatsApp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import React from "react";
import {  useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import Reserve from "../../components/reserve/Reserve";

const Hostel = ({username, dat}) => {
  const {id} = useParams();
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([ {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  },]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({ adults: 1, children: 0, rooms: 1,});
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  
  const {data, loading, error} = useFetch(`https://hostel7booking.herokuapp.com/api/hostels/find/${id}`);

  const MILLISECONDS_PER_DAY = 1000*60*60*24;
  function dayDifference(date1,date2){
    const timeDiff = Math.abs(date2.getTime()-date1.getTime());
    const diffDays = Math.ceil(timeDiff/MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].startDate,dates[0].endDate)
  const month = days/30;
  const months = month.toFixed(2);
  const handleClick =()=>{setOpenModal(true)}
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
      <Navbar username = {username}/>
      <div>
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
              <h1 className="hotelTitle">{data.name}</h1>
              <div className="hotelAddress">
                <FontAwesomeIcon icon={faLocationDot} />
                <span> {data.address}</span>
              </div>
              <span className="hotelDistance">
                 {data.distance}
              </span>
              <span className="hotelPriceHighlight">
              <FontAwesomeIcon icon="faWhatsApp" />
                Book a monthly stay at only usx {data.cheapestPrice} at {data.name} {data.type}.
              </span>
              <div className="hotelImages">
                {data.img?.map((photo, i) => (
                  <div className="hotelImgWrapper" key={i}>
                    <img
                      onClick={() => handleOpen(i)}
                      src={photo}
                      alt=""
                      className="hotelImg"
                    />
                  </div>
                ))}
              </div>
              <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                  <h1 className="hotelTitle">{data.title}!</h1>
                  <p className="hotelDesc">
                    {data.desc}
                  </p>
                </div>
                <div className="hotelDetailsPrice">
                  <h2>
                    <b>usx {months*data.cheapestPrice*options.rooms}</b> ({months} months)
                  </h2>
                  <button onClick={handleClick}>Reserve or Book Now!</button>
                </div>
              </div>
            </div>
          </div>
       
        {openModal && <Reserve dates={dates} hostelId={id} setOpen={setOpenModal}/>}
    </div>
  );
};

export default Hostel;
