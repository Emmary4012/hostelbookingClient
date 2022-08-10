// import React from "react";
// import {
//   faBed,
//   faCalendarDays,
//   faCar,
//   faPerson,
//   faPlane,
//   faTaxi,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./header.css";
// import { DateRange } from "react-date-range";
// import { useState } from "react";
// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { format } from "date-fns";
// import { useNavigate } from "react-router-dom";
// import {useSelector, useDispatch} from 'react-redux';
// import { searchActions } from "../store/searchSlice";

// const Header = ({ type }) => {
  
//   const [openDate, setOpenDate] = useState(false);
//   const search = useSelector((state)=> state.search)
//   const [destination, setDestination] = useState("");
//   const [dates, setDates] = useState([ {
//     startDate: new Date(),
//     endDate: new Date(),
//     key: "selection",
//   },]);
//   const [openOptions, setOpenOptions] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const options = search.options;
//   return (
//     <div className="header">
//       <div
//         className={
//           type === "list" ? "headerContainer listMode" : "headerContainer"
//         }
//       >
//         <div className="headerList">
//           <div className="headerListItem active">
//             <FontAwesomeIcon icon={faBed} />
//             <span>Stays</span>
//           </div>
//           <div className="headerListItem">
//             <FontAwesomeIcon icon={faPlane} />
//             <span>Flights</span>
//           </div>
//           <div className="headerListItem">
//             <FontAwesomeIcon icon={faCar} />
//             <span>Car rentals</span>
//           </div>
//           <div className="headerListItem">
//             <FontAwesomeIcon icon={faBed} />
//             <span>Attractions</span>
//           </div>
//           <div className="headerListItem">
//             <FontAwesomeIcon icon={faTaxi} />
//             <span>Airport taxis</span>
//           </div>
//         </div>
//         {type !== "list" && (
//           <>
//             <h1 className="headerTitle">
//               A lifetime of discounts? It's Genius.
//             </h1>
//             <p className="headerDesc">
//               Get rewarded for your travels – unlock instant savings of 10% or
//               more with a free Lamabooking account
//             </p>
//             <button className="headerBtn">Sign in / Register</button>
//             <div className="headerSearch">
//               <div className="headerSearchItem">
//                 <FontAwesomeIcon icon={faBed} className="headerIcon" />
//                 <input
//                   type="text"
//                   placeholder="Where are you going?"
//                   className="headerSearchInput"
//                   onChange={(e) => {setDestination(e.target.value)}}
                  
//                 />
//               </div>
//               <div className="headerSearchItem">
//                 <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
//                 <span
//                   onClick={() => setOpenDate(!openDate)}
//                   className="headerSearchText"
//                 >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
//                   dates[0].endDate,
//                   "MM/dd/yyyy"
//                 )}`}</span>
//                 {openDate && (
//                   <DateRange
//                     editableDateInputs={true}
//                     onChange={(item) => {setDates([item.selection])}}
//                     moveRangeOnFirstSelection={false}
//                     ranges={dates}
//                     className="date"
//                     minDate={new Date()}
//                   />
//                 )}
//               </div>
//               <div className="headerSearchItem">
//                 <FontAwesomeIcon icon={faPerson} className="headerIcon" />
//                 <span
//                   onClick={() => setOpenOptions(!openOptions)}
//                   className="headerSearchText"
//                 >{`${search.options.adult} adult · ${search.options.children} children · ${search.options.room} room`}</span>
//                 {openOptions && (
//                   <div className="options">
//                     <div className="optionItem">
//                       <span className="optionText">Adult</span>
//                       <div className="optionCounter">
//                         <button
//                           disabled={search.options.adult <= 1}
//                           className="optionCounterButton"
//                           onClick={() => {dispatch(searchActions.decreaseAdults())}}
//                         >
//                           -
//                         </button>
//                         <span className="optionCounterNumber">
//                           {search.options.adult}
//                         </span>
//                         <button
//                           className="optionCounterButton"
//                           onClick= {() => {dispatch(searchActions.increaseAdults())}}
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                     <div className="optionItem">
//                       <span className="optionText">Children</span>
//                       <div className="optionCounter">
//                         <button
//                           disabled={search.options.children <= 0}
//                           className="optionCounterButton"
//                           onClick={() => {dispatch(searchActions.decreaseChildren())}}
//                         >
//                           -
//                         </button>
//                         <span className="optionCounterNumber">
//                           {search.options.children}
//                         </span>
//                         <button
//                           className="optionCounterButton"
//                           onClick={() => {dispatch(searchActions.increaseChildren())}}
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                     <div className="optionItem">
//                       <span className="optionText">Room</span>
//                       <div className="optionCounter">
//                         <button
//                           disabled={search.options.room <= 1}
//                           className="optionCounterButton"
//                           onClick={() => {dispatch(searchActions.decreaseRooms())}}
//                         >
//                           -
//                         </button>
//                         <span className="optionCounterNumber">
//                           {search.options.room}
//                         </span>
//                         <button
//                           className="optionCounterButton"
//                           onClick={() => {dispatch(searchActions.increaseRooms())}}
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <div className="headerSearchItem">
//                 <button className="headerBtn" onClick={() => {
//     navigate("/hotels");
//    // dispatch( searchActions.setOptions(options));
//   }}>
//     {/* searchActions.setDates(dates), searchActions.setDestination(destination), */}
//                   Search
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;
