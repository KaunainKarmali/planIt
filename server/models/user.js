import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  ip: String,
  creationDate: {
    type: Date,
    default: new Date(),
  },
  notes: [],
});

const User = mongoose.model("User", userSchema);

export default User;
