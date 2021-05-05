import mongoose from "mongoose";

// Item schema
const itemSchema = new mongoose.Schema({
  itemName: String,
  itemPriority: String,
  itemAssignedTo: String,
  itemDueDate: Date,
  itemTracking: {
    type: [
      {
        duration: Number,
        createdAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
});

// Project schema
const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
  },
  projectCreationDate: {
    type: Date,
    default: new Date(),
  },
  creatorName: {
    type: String,
  },
  teamMemberNames: {
    type: [],
  },
  startDate: {
    type: Date,
  },
  dueDate: {
    type: Date,
  },
  engagementCode: {
    type: String,
  },
  list: {
    type: [itemSchema],
  },
});

// User schema
const userSchema = new mongoose.Schema({
  ip: String,
  userCreationDate: {
    type: Date,
    default: new Date(),
  },
  projects: [projectSchema],
});

const User = mongoose.model("User", userSchema);

export default User;
