import User from "../models/user.js";

// function tries to find the user in the database
export async function getUser(req, res) {
  try {
    const ip = req.query.ip;

    await User.findOne({ ip: ip }, function (err, result) {
      if (err !== null) {
        console.log(err);
        res.status(409).json({ message: error });
      } else if (result === null) {
        res.status(204).json({ message: "User not found." });
      } else {
        res.status(200).json(result);
      }
    });
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
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
}
