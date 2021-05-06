import express from "express";
const router = express.Router();

// import controllers
import { createNote, createProject, createItem } from "../controllers/trial.js";

// callback function called when visiting localhost:5000/trial
router.post("/", createNote);

// callback function called when visiting localhost:5000/trial/createProject
router.post("/create-project", createProject);

// callback function called when visiting localhost:5000/trial/createItem
router.post("/create-item", createItem);

export default router;
