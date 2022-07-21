import express from "express";
import { createHotel, deleteHotel, getHotels, getHotel, updateHotel, countByCity, countByType } from "../controllers/hotel.js";
import { verifyAdmin } from "../Utils/verifyToken.js";
const hotelsRoute = express.Router();


//CREATE
hotelsRoute.post("/",verifyAdmin, createHotel);

//UPDATE
hotelsRoute.put("/:id", verifyAdmin ,updateHotel);

//DELETE
hotelsRoute.delete("/:id", verifyAdmin,deleteHotel);

//GET
hotelsRoute.get("/find/:id", getHotel);

//GET ALL
hotelsRoute.get("/", getHotels);
hotelsRoute.get("/countByCity", countByCity);
hotelsRoute.get("/countByType", countByType);

export default hotelsRoute