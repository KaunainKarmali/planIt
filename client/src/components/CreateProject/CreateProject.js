import React, { useState } from "react";
import globalThemes from "../../styles/globalThemes.js";
import useStyles from "./styles";
import { Button, ThemeProvider } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CreateProjectDialog from "../CreateProjectDialog/CreateProjectDialog";

export default function CreateProject() {
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
        <CreateProjectDialog open={open} setOpen={setOpen} />
      </div>
    </ThemeProvider>
  );
}
