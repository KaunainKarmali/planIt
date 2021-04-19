import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  creationDate: {
    type: Date,
    default: new Date(),
  },
  items: [String],
});

const User = mongoose.model("User", userSchema);

export default User;
