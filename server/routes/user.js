import express from "express";
const router = express.Router();

// import controllers
import { getUser, createUser } from "../controllers/user.js";

// signup router setup
// callback function called when visiting localhost:5000/signup
router.get("/", getUser);
router.post("/", createUser);

export default router;
