import React from "react";
import { useState } from "react";
import "./app.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Confirmation from "./pages/confirmation/Confirmation";
import Register from "./pages/register/Register";
import Property from "./pages/property/Property";
import About from "./pages/about/About";
import Terms from "./pages/terms/Terms";
import Care from "./pages/care/Care";
import Recreation from "./pages/recreation/Recreation";
import SkyConfirmation from "./pages/skyConfirmation/SkyConfirmation";
import {  propertyInputs, userInputs } from "./formSource";
import { roomColumns, propertyColumns, userColumns } from "./datatablesource";
import  NewProperty  from "./pages/property/NewProperty";
import  NewRoom  from "./pages/newRoom/NewRoom";
import UpdateProperty from "./pages/property/UpdateProperty";
import Admin from "./pages/admin/Admin";
import Record from "./pages/record/Record";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

function App() {
  const [credentials, setCredentials] = useState({username: undefined, 
    email: undefined, fullname: undefined, propertyName: undefined, propertyType: undefined, address: undefined, 
    phone: undefined, price: undefined, months: undefined, 
    // dates: [ { startDate: new Date(), endDate: new Date(), key: "selection",},], 
    // options: { adults: 1, children: 0, rooms: 1,}, selectedRooms: [],
    message: undefined, modeofpayment: undefined});
  const handleChange = (e) => { setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}))};

  const [dates, setDates] = useState([ {startDate: new Date(), endDate: new Date(), key: "selection",},]);
  const [selectedRooms, setSelectedRooms] = useState([]);
 
  return (
    <Router>  
      <Routes>
        <Route path="/register" element={<Register credentials = {credentials} handleChange = {handleChange}/>}/>
        <Route path="/login" element={<Login credentials = {credentials} handleChange = {handleChange}/>}/>
        <Route path="/" element={<Home username = {credentials.username}/>}/>
        <Route path="/recreation" element={<Recreation credentials = {credentials} handleChange = {handleChange} dates={dates} setDates={setDates}/>}/>
        <Route path="/properties/:property" element={<List username = {credentials.username} />}/>
        <Route path="/properties/:property/:id" element={<Property credentials = {credentials} handleChange = {handleChange} 
        dates={dates} setDates={setDates} selectedRooms={selectedRooms} setSelectedRooms={setSelectedRooms}/>}/>
        
        <Route path="/confirmation" element={<Confirmation credentials = {credentials} handleChange = {handleChange} selectedRooms={selectedRooms} dates={dates}/>}/>
        <Route path="/skyconfirmation" element={<SkyConfirmation credentials = {credentials} handleChange = {handleChange} selectedRooms={selectedRooms} dates={dates}/>}/>
        <Route path="/about" element={<About credentials = {credentials} handleChange = {handleChange} />}/>
        <Route path="/terms" element={<Terms credentials = {credentials} />}/>
        <Route path="/care" element={<Care credentials = {credentials} />}/>

        <Route path="/admin">

          <Route index element={<Admin />} />
          <Route path="users">
            <Route index element={<Record columns={userColumns}/>} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New inputs={userInputs} title="Add New User"/>} />
          </Route>

          <Route path="properties/:property">
            <Route index element={<Record columns={propertyColumns}/>} />
            <Route path="new" element={<NewProperty inputs={propertyInputs}/>} />      
            <Route path=":id" element={<UpdateProperty />} />
          </Route>

          <Route path="property/rooms">
            <Route index element={<Record columns={roomColumns}/>} />
            <Route path="new" element={<NewRoom />} />
            <Route path="view/:roomsId" element={<Single />} />
            <Route path=":roomsId" element={<Single />} />
          </Route>

        </Route>
        <Route path="*" element={<Home username = {credentials.username} />}/>
      </Routes>
    </Router>   
  );
}

export default App;
