import express from "express";
const router = express.Router();

// import controllers
import {
  createNote,
  createProject,
  createItem,
  saveDuration,
} from "../controllers/trial.js";

// callback function called when visiting localhost:5000/trial
router.post("/", createNote);

// callback function called when visiting localhost:5000/trial/create-project
router.post("/create-project", createProject);

// callback function called when visiting localhost:5000/trial/create-item
router.post("/create-item", createItem);

// callback function called when visiting localhost:5000/trial/save-duration
router.post("/save-duration", saveDuration);

export default router;
