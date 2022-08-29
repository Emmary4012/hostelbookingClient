#Hostel_booking
updating unavailable dates
payment system
dynamic home pictures
slider
updating hostels

Chat
Lost Items
Customer Service
Terms & Conditions

campuses. Pop up menu (search by campuses. Link to Hostels)
villages. Pop up menu (search by villages. Link to Hostels)

Subscription

Unique places to stay in (new property, uniqueness desc, map to a newpage)
Reviews (starring page)

Hostels (A list of all the Hostels, using map)
Apartments (A list of all the Apartments, using map)
Rentals (A list of all the Rentals, using map)
Hotels (A list of all the Hotels, using map)
Recreation Centres (A list of all the Recreation Centers, using map)

const e = f.map((F)=> new Date(F));
const yr = d.map((h)=> h.getFullYear());
const mn = d.map((h)=> h.getMonth());
const dt = d.map((h)=> h.getDate());

 https://aka.ms/pscore6

 <!DOCTYPE html>
<html>
<body>

<h2>JavaScript Loops</h2>

<p>A loop with a <b>continue</b> statement.</p>

<p id="demo"></p>

<script>
const data = [{name:"d", campus:"MUK"}, {name:"d", campus:"MUBS"},{name:"d", campus:"MUK"}];
const institutions = [];

for (let i = 0; i < 10; i++) {
  if (institutions.include(data[i].campus)) { continue; }
  institutions.push(data[i].campus);
  return institutions;
}

document.getElementById("demo").innerHTML = institutions;
</script>

</body>
</html>

import React from "react";
import { motion } from "framer-motion";
import "./styles.css";

export default function App() {
  return (
    <div className="my-container">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
    </div>
  );
}