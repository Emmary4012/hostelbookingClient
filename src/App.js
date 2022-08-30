import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hostel from "./pages/hostel/Hostel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Confirmation from "./pages/confirmation/Confirmation";
import Register from "./pages/register/Register";

function App() {

  const [username, setUsername] = useState(undefined);
  return (
    <Router>  
      <Routes>
        <Route path="/register" element={<Register setUsername = {setUsername}/>}/>
        <Route path="/login" element={<Login setUsername = {setUsername}/>}/>
        <Route path="/" element={<Home username = {username}/>}/>
        <Route path="/hostels" element={<List username = {username}/>}/>
        <Route path="/hostels/:id" element={<Hostel username = {username}/>}/>
        <Route path="/confirmation" element={<Confirmation setUsername = {setUsername}/>}/>
      </Routes>
    </Router>   
  );
}

export default App;
