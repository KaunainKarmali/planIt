import User from "../models/user.js";

// function tries to create a note in the database
export async function createNote(req, res) {
  const { ip, note } = req.body;

  const query = { ip: ip };

  const updateDocument = {
    $push: { notes: note },
  };

  try {
    const result = await User.updateOne(query, updateDocument);

    // Saved successfully
    if ((result.ok === 1) & (result.nModified === 1)) {
      res.status(201).json({ message: "Saved successfully." });
    }

    // User cannot be found
    else if ((result.ok === 1) & (result.nModified === 0)) {
      res
        .status(201)
        .json({ message: "Save unsuccessful. User cannot be found." });
    }

    // Error, could not save
    else {
      res.status(201).json({ message: result });
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}
