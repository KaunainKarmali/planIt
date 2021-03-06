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

export async function createItem(req, res) {
  const { userId, projectId, newItem } = req.body;

  const query = {
    $and: [{ _id: userId }, { projects: { $elemMatch: { _id: projectId } } }],
  };

  const update = { $push: { "projects.$.list": newItem } };

  const options = {
    useFindAndModify: false,
    new: true,
  };

  try {
    const status = await User.findOneAndUpdate(query, update, options).exec();
    if (status._id.toString() === userId.toString()) {
      res.status(201).json({ message: status });
    } else {
      res.status(409).json({ message: status });
    }
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error });
  }
}

export async function editItem(req, res) {
  const { userId, projectId, edittedItem } = req.body;

  try {
    const user = await User.findOne({ _id: userId });

    const projectIndex = user.projects.findIndex((element) => {
      return element._id.toString() === projectId.toString();
    });

    const itemIndex = user.projects[projectIndex].list.findIndex((element) => {
      return element._id.toString() === edittedItem._id.toString();
    });

    user.projects[projectIndex].list[itemIndex] = edittedItem;

    // console.log(user.projects[projectIndex].list[itemIndex]);

    user.save();

    res.status(201).json({ message: user });
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error });
  }
}

export async function deleteItem(req, res) {
  const { userId, projectId, itemId } = req.body;

  try {
    const user = await User.findOne({ _id: userId });

    const projectIndex = user.projects.findIndex((element) => {
      return element._id.toString() === projectId.toString();
    });

    const itemIndex = user.projects[projectIndex].list.filter((element) => {
      return element._id.toString() === itemId.toString();
    });

    // delete item from list in the user object
    user.projects[projectIndex].list.splice(itemIndex, 1);

    user.save();

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error });
  }
}

export async function loadDuration(req, res) {
  const { userId, projectId, itemId } = req.query;

  try {
    const user = await User.findOne({ _id: userId });

    const projectIndex = user.projects.findIndex((element) => {
      return element._id.toString() === projectId.toString();
    });

    const itemIndex = user.projects[projectIndex].list.findIndex((element) => {
      return element._id.toString() === itemId.toString();
    });

    const duration = user.projects[projectIndex].list[itemIndex].itemDuration;

    res.status(201).json({ message: duration });
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error });
  }
}

export async function saveDuration(req, res) {
  const { userId, timeObject } = req.body;

  try {
    const user = await User.findOne({ _id: userId });

    const projectIndex = user.projects.findIndex((element) => {
      return element._id.toString() === timeObject.projectId.toString();
    });

    const itemIndex = user.projects[projectIndex].list.findIndex((element) => {
      return element._id.toString() === timeObject.itemId.toString();
    });

    user.projects[projectIndex].list[itemIndex].itemDuration =
      timeObject.duration;

    user.save();

    res.status(201).json({ message: user });
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error });
  }
}
