import React, { useState } from "react";
import globalThemes from "../../styles/globalThemes.js";
import useStyles from "./styles";
import { Button, ThemeProvider } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CreateNewItem from "../CreateNewItem/CreateNewItem";

export default function CreateItem(props) {
  const theme = globalThemes;
  const componentClasses = useStyles();

  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={componentClasses.container}>
        <Button
          size="large"
          color="primary"
          className={componentClasses.button}
          onClick={handleClickOpen}
        >
          <AddIcon className={componentClasses.addIcon} />
        </Button>
        <CreateNewItem open={open} setOpen={setOpen} />
      </div>
    </ThemeProvider>
  );
}
