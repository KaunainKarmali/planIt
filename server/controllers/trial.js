import User from "../models/user.js";

// function tries to create a note in the database
export async function createNote(req, res) {
  const { ip, note, board } = req.body;

  console.log(ip);
  console.log(note);
  console.log(board);

  // const user =
  // console.log(user);

  // if (user.data[board]) {
  // console.log("board found");
  // user.data[board].push(note);
  // } else {
  // console.log("board NOT found");
  // console.log(user.data);

  // const updateDocument = { $set: { data: { $push: { [board]: note } } } };

  // const updateDocument = {
  //   $set: { (`data.${board}`) : { $push: { [board]: note } } },
  // };

  // const updateDocument = {
  //   $set: { data: { $push: { [board]: note } } },
  // };

  const key = `data.${board}`;

  // const updateDocument = {
  //   $set: { [key]: note },
  // };

  // const newBoard = { [board]: [note] };
  // const updateBoard = { $push: { [board]: note } };

  // const updateDocument = {
  //   $set: {
  //     `data.$[elem].${board}` : note
  //   }
  // };

  // const query = { ip: ip, data: board };

  // const resultOne = await User.updateOne(
  //   query,
  //   updateBoard,
  //   (err, response) => {
  //     console.log(response);
  //   }
  // );
  // console.log("RESPONSE ONE...");
  // console.log(resultOne);

  // const queryTwo = { ip: ip };

  // const updateDocumentTwo = { $set: { data: newBoard } };
  // // Update user model when the board is new
  // const result = await User.updateOne(
  //   queryTwo,
  //   updateDocumentTwo,
  //   (err, response) => {
  //     // console.log(response);
  //   }
  // );
  // console.log("RESPONSE TWO...");
  // console.log(result);

  // if (user.data[board]) {
  //   console.log("Cannot find board");
  // } else {
  //   console.log("Found board");
  //   const result = await user.updateOne(updateDocument, (err, response) => {
  //     console.log(response);
  //   });
  //   console.log(result);
  // }

  // user.update({
  //   $push: { data: newBoard },
  // });

  // console.log();
  // document.updateOne({ $push: { data: note } }, (err, response) => {
  //   console.log(response);
  // });
  // }

  // const updateDocument = {
  //   $push: { notes: note },
  // };

  // const updateDocument = {
  //   $push: {
  //     data: {
  //       [board]: note,
  //     },
  //   },
  // };

  try {
    // const result = await User.updateOne(query, updateDocument);
    // result.then((res) => console.log(res));
    // // Saved successfully
    // if ((result.ok === 1) & (result.nModified === 1)) {
    //   res.status(201).json({ message: "Saved successfully." });
    // }
    // // User cannot be found
    // else if ((result.ok === 1) & (result.nModified === 0)) {
    //   res
    //     .status(201)
    //     .json({ message: "Save unsuccessful. User cannot be found." });
    // }
    // // Error, could not save
    // else {
    //   res.status(201).json({ message: result });
    // }
  } catch (error) {
    // res.status(409).json({ message: error.message });
  }
}
