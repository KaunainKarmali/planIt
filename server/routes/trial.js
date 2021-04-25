import express from "express";
const router = express.Router();

// import controllers
import { createNote } from "../controllers/trial.js";

// signup router setup
// callback function called when visiting localhost:5000/trial
router.post("/", createNote);

export default router;
