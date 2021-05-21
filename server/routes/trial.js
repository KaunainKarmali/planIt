import express from "express";
const router = express.Router();

// import controllers
import {
  createNote,
  createProject,
  createItem,
  saveDuration,
  loadDuration,
  deleteItem,
  editItem,
} from "../controllers/trial.js";

// callback function called when visiting localhost:5000/trial
router.post("/", createNote);

// callback function called when visiting localhost:5000/trial/create-project
router.post("/create-project", createProject);

// callback function called when visiting localhost:5000/trial/create-item
router.post("/create-item", createItem);

// callback function called when visiting localhost:5000/trial/edit-item
router.post("/edit-item", editItem);

// callback function called when visiting localhost:5000/trial/delete-item
router.post("/delete-item", deleteItem);

// callback function called when visiting localhost:5000/trial/save-duration
router.get("/load-duration", loadDuration);

// callback function called when visiting localhost:5000/trial/save-duration
router.post("/save-duration", saveDuration);

export default router;
