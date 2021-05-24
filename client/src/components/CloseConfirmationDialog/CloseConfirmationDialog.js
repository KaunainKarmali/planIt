import React, { useState, useContext, useEffect } from "react";
import globalThemes from "../../styles/globalThemes.js";
import useGlobalStyles from "../../styles/globalStyles.js";
import useStyles from "./styles";
import {
  Dialog,
  ThemeProvider,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@material-ui/core";
import { UserContext, ProjectContext } from "../../Context";
import { createItem } from "../../api/index";
import { extractProject } from "../../services/utils";
import { v4 as uuidv4 } from "uuid";
import { deleteItem } from "../../api";

export default function CloseConfirmationDialog(props) {
  const theme = globalThemes;
  const classes = useGlobalStyles();
  const componentClasses = useStyles();

  // Global user state
  const { user, setUser } = useContext(UserContext);
  const { project, setProject } = useContext(ProjectContext);

  // props manage whether to show dialog box or not
  const { open, setOpen, itemId, itemName } = props;

  // callback to clear the user's new project form and reset all the state variables

  // callback to clear the user's new project form and reset all the state variables when form is closed
  function handleClose() {
    setOpen(false);
  }

  async function handleSubmit() {
    const response = await deleteItem(user._id, project._id, itemId);

    if (response.status === 200) {
      setUser(response.data.user);
    } else {
      console.log("ERROR");
      console.log(response);
    }
    setOpen(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        onClose={handleClose}
        aria-labelledby="delete-item"
        open={open}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle id="delete-item">Delete item</DialogTitle>

        <DialogContent dividers={true}>
          <Typography>Are you sure you want to delete {itemName}?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} type="cancel" color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            type="submit"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
