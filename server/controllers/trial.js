import User from "../models/user.js";

// function tries to create a note in the database
export async function createNote(req, res) {
  const { ip, note, board } = req.body;

  let query = {
    $and: [{ ip: ip }, { data: { $elemMatch: { board: board } } }],
  };

  let update = { $push: { "data.$.notes": note } };

  let options = {
    useFindAndModify: false,
    new: true,
    rawResult: true,
  };

  try {
    // Append new note to the existing user's data
    let status = await User.findOneAndUpdate(query, update, options).exec();

    // Create a new board if the board does not exist for the user
    if (status.value === null) {
      query = { ip: ip };
      update = { $push: { data: { board: board, notes: [note] } } };
      status = await User.findOneAndUpdate(query, update, options).exec();
    }

    // Provide response depending on creation status

    // Saved successfully
    if ((status.value !== null) & (status.ok === 1)) {
      res.status(201).json({ message: status.value });
    }

    // Cannot save
    else if (status.lastErrorObject.n === 0) {
      res.status(201).json({ message: "Cannot save note." });
    }

    // All other errors
    else {
      res.status(409).json({ message: status });
    }
  } catch (error) {
    res.status(409).json({ message: error });
  }
}

export async function createProject(req, res) {
  const { userId, newProject } = req.body;

  const update = { $push: { projects: newProject } };

  const options = {
    useFindAndModify: false,
    new: true,
  };

  try {
    const status = await User.findByIdAndUpdate(userId, update, options).exec();
    if (status._id.toString() === userId.toString()) {
      res.status(201).json({ message: status });
    } else {
      console.log(status);
      res.status(409).json({ message: status });
    }
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error });
  }
}
