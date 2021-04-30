import mongoose from "mongoose";

// Note schema
const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
});

// Board schema
const boardSchema = new mongoose.Schema({
  board: {
    type: String,
  },
  notes: {
    type: [noteSchema],
  },
});

// User schema
const userSchema = new mongoose.Schema({
  ip: String,
  creationDate: {
    type: Date,
    default: new Date(),
  },
  data: [boardSchema],
});

const User = mongoose.model("User", userSchema);

export default User;
