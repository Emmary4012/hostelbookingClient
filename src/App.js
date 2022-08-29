import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import useFetch from "./hooks/useFetch";
import Home from "./pages/home/Home";
import Hostel from "./pages/hostel/Hostel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Confirmation from "./pages/confirmation/Confirmation";
import Register from "./pages/register/Register";

function App() {
 const campus = "";
  const [username, setUsername] = useState(undefined);
  const {data, loading, error, reFetch} = useFetch(`https://hostel7booking.herokuapp.com/api/hostels`);
  function getInstitutions (data) {
    const universities = [];
    for (let i = 0; i < data.length; i++) {
      if (universities.includes(data[i].campus)) { continue; }
      universities.push(data[i].campus);
    }
    return universities;
  };

  function getVillages (data) {
    const regions = [];
    for (let i = 0; i < data.length; i++) {
      if (regions.includes(data[i].village)) { continue; }
      regions.push(data[i].village);
    }
    return regions;
  };
  const institutions = getInstitutions(data);
  const villages = getVillages(data);

  return (
    <Router>  
      <Routes>
        <Route path="/register" element={<Register setUsername = {setUsername}/>}/>
        <Route path="/login" element={<Login setUsername = {setUsername}/>}/>
        <Route path="/" element={<Home username = {username}/>}/>
        <Route path="/hostels" element={<List username = {username} data={data} institutions = {institutions} villages = {villages}/>}/>
        <Route path="/hostels/:id" element={<Hostel dat = {data} username = {username}/>}/>
        <Route path="/confirmation" element={<Confirmation setUsername = {setUsername}/>}/>
      </Routes>
    </Router>   
  );
}

export default App;
