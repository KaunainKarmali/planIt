import React, { useState, useEffect, useContext } from "react";
import globalThemes from "../../styles/globalThemes.js";
import useStyles from "./styles";
import { ThemeProvider, Card, IconButton, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { createNote } from "../../api/index";
import { UserContext, BoardContext } from "../../Context";

function NoteInput() {
  // Themes
  const theme = globalThemes;
  const componentClasses = useStyles();

  // Global state
  const { user, setUser } = useContext(UserContext);
  const { currentBoard } = useContext(BoardContext);

  // Local state
  const [note, setNote] = useState({
    // id: "",
    title: "",
    content: "",
  });

  useEffect(() => {}, [user]);

  // update the note state with the user's input
  function handleChange(event) {
    const key = event.target.name;
    const value = event.target.value;

    setNote({
      ...note,
      [key]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    let newData = "";

    if (user.data && currentBoard in user.data) {
      // Append to the list of notes under the existing board selected
      const newList = user.data[currentBoard].concat(note);

      // Update the data object to include the new note
      newData = {
        ...user.data,
        [currentBoard]: newList,
      };
    } else {
      newData = {
        ...user.data,
        [currentBoard]: [note],
      };
    }

    setUser({
      ...user,
      data: newData,
    });

    const createResponse = await createNote(user.ip, note, currentBoard);

    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={componentClasses.container}>
          <Card className={componentClasses.card}>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField
                id="title"
                name="title"
                label="Title"
                value={note.title}
                onChange={handleChange}
                variant="outlined"
                color="secondary"
                className={componentClasses.textField}
              />
              <TextField
                id="content"
                label="Content"
                name="content"
                value={note.content}
                onChange={handleChange}
                variant="outlined"
                color="secondary"
                multiline
                rowsMax={4}
                className={componentClasses.textField}
              />
              <IconButton
                color="primary"
                type="submit"
                className={componentClasses.iconButton}
              >
                <AddIcon className={componentClasses.icon} />
              </IconButton>
            </form>
          </Card>
        </div>
      </ThemeProvider>
    </>
  );
}

export default NoteInput;
