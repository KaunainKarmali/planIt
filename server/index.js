import dotenv from "dotenv";
dotenv.config();

// module imports
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import signupRoutes from "./routes/user.js";
import trialRoutes from "./routes/trial.js";

// setup app
const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// setup app middleware to manage routes
// Route to http://localhost:5000/signup
app.use("/signup", signupRoutes);
// Route to http://localhost:5000/trial
app.use("/trial", trialRoutes);

// Connect server to database
const CONNECTION_URL = "mongodb://localhost:27017/userDB";
// `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.xwdfx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Listening on port: ${PORT}`)))
  .catch((error) => console.log(error));
