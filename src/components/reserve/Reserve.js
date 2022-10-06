import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./reserve.css";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useEffect } from "react";

const Reserve = ({ setOpen, propertyId, dates, selectedRooms, setSelectedRooms, dat}) => {
  useEffect(()=>{ gsap.fromTo (".reserve", {x:-200, opacity:0, }, {x:0, opacity:1, duration: 3, ease: "bounce.out",});
                gsap.fromTo (".rItem", {x:200, opacity:0, }, {x:0, opacity:1, duration: 7, ease: "bounce.out",});
                setSelectedRooms([]);
              },[]);
  const { data, loading, error } = useFetch(`https://hostel7booking.herokuapp.com/api/${dat.type}s/room/${propertyId}`);
  console.log(data)
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime()); 
    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
    console.log(dates)
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);
  
  const isAvailable = (roomNumber) => {
   const f = new Date(roomNumber.unavailableDates[roomNumber.unavailableDates.length-1]);
   const d = f.getTime();
   const ok = d>alldates[0];
   return !ok;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    console.log(selectedRooms)
    console.log(value)
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();
  const handleClick = async () => {
      try {console.log(selectedRooms);
      // await Promise.all(
      //   selectedRooms.map((roomId) => {
      //     const res = axios.put(`https://hostel7booking.herokuapp.com/api/${dat.type}srooms/availability/${roomId}`, { dates: alldates,  });
      //     return res.data;
          
      //   })
      // );
      setOpen(false);
      navigate("/confirmation");
    } catch (err) {}
  };
  return (
    <div className="reserve">
      {data.length?
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        <span className="rDesc">{dat.roomsdesc && dat.roomsdesc}</span>
        {data && data.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo" key={item._id}>
              {item.title && <div className="rTitle">{item.title}</div>}
              {item.desc && <div className="rDesc">{item.desc}</div>}
              {item.maxPeople && <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>}
              {item.price && <div className="rPrice">usx {item.price}</div>}
            </div>
            <div className="rSelectRooms">
              {item.roomNumbers.map((roomNumber) => (
                <div className="room" key={roomNumber.number}>
                  <label>{roomNumber.number}</label>
                  <input 
                    type="checkbox"
                    value={roomNumber.number}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>:
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span className="rDesc">{dat.roomsdesc && dat.roomsdesc}</span><br/>
        Sorry, we haven't yet uploaded rooms for {dat.name} {dat.type}. Certainly, we shall be done by this week.
        Otherwise, we have almost all the details you need to know about {dat.name} {dat.type}. So you can proceed to reserve and specify your 
        interest within the message on our reserve confirmation page.<br/> 
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
      }
    </div>
  );
};

export default Reserve;