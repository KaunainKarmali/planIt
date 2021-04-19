import User from "../models/user.js";

// function tries to find the user in the database
export async function getUser(req, res) {
  try {
    const usersFound = await User.find({});
    res.status(200).json(usersFound);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
}

// function tries to create a user in the database
export async function createUser(req, res) {
  const user = req.body;
  const newUser = new User(user);

  try {
    await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}
