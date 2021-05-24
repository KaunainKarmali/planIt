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
  TextField,
  Button,
  MenuItem,
} from "@material-ui/core";
import { UserContext, ProjectContext } from "../../Context";
import { createItem, editItem } from "../../api/index";
import { extractProject } from "../../services/utils";
import { v4 as uuidv4 } from "uuid";

export default function CreateNewItem(props) {
  const theme = globalThemes;
  const classes = useGlobalStyles();
  const componentClasses = useStyles();

  // Global user state
  const { user, setUser } = useContext(UserContext);

  // props manage whether to show dialog box or not
  const { open, setOpen, item, edit } = props;
  const { project, setProject } = useContext(ProjectContext);

  // state stores new project details
  const [newItem, setNewItem] = useState({
    itemName: "",
    itemPriority: "",
    itemAssignedTo: "",
    itemDueDate: "",
    itemDuration: 0,
    itemStatus: "To do",
  });

  useEffect(() => {
    if (edit === true) {
      setNewItem(item);
    }
  }, [item]);

  // callback to track user's keystrokes
  function handleChange(event) {
    const key = event.target.name;
    const value = event.target.value;

    setNewItem({
      ...newItem,
      [key]: value,
    });
  }

  // callback to clear the user's new project form and reset all the state variables
  function handleReset() {
    setOpen(true);
    setNewItem({
      itemName: "",
      itemPriority: "",
      itemAssignedTo: "",
      itemDueDate: "",
      itemDuration: 0,
      itemStatus: "To do",
    });
  }

  // callback to clear the user's new project form and reset all the state variables when form is closed
  function handleClose() {
    handleReset();
    setOpen(false);
  }

  async function handleSubmit() {
    let response = "";

    if (edit) {
      response = await editItem(user._id, project._id, newItem);
    } else {
      response = await createItem(user._id, project._id, newItem);
    }
    if (response.status === 201) {
      setUser(response.data.message);
    } else {
      console.log("ERROR");
      console.log(response);
    }
    handleReset();
    setOpen(false);
  }

  return (
    <>
      {open && (
        <ThemeProvider theme={theme}>
          <Dialog
            onClose={handleClose}
            aria-labelledby="item dialogue"
            open={open}
            fullWidth
            maxWidth="xs"
          >
            <DialogTitle id="create-new-item">
              {edit ? "Edit item" : "Create a new item"}
            </DialogTitle>

            <DialogContent dividers={true}>
              <TextField
                autoFocus
                margin="dense"
                id="itemName"
                label="Item name"
                type="text"
                name="itemName"
                onChange={handleChange}
                value={newItem.itemName}
                fullWidth
              />

              <TextField
                id="itemPriority"
                margin="dense"
                fullWidth
                label="Priority"
                value={newItem.itemPriority}
                onChange={handleChange}
                name="itemPriority"
                select
              >
                {priorityOptions.map((item, index) => {
                  return index === 0 ? (
                    <MenuItem key={uuidv4()} value={item.value} default>
                      {item.value}
                    </MenuItem>
                  ) : (
                    <MenuItem key={uuidv4()} value={item.value}>
                      {item.value}
                    </MenuItem>
                  );
                })}
              </TextField>

              <TextField
                id="itemAssignedTo"
                margin="dense"
                fullWidth
                label="Assigned to"
                value={newItem.itemAssignedTo}
                onChange={handleChange}
                name="itemAssignedTo"
                select
              >
                {project & project.creatorName && (
                  <MenuItem value={`${project.creatorName}`}>
                    {project.creatorName}
                  </MenuItem>
                )}

                {project &&
                  project.teamMemberNames.map((member) => {
                    return (
                      <MenuItem
                        key={uuidv4()}
                        id={uuidv4()}
                        value={`${member.name}`}
                      >
                        {member.name}
                      </MenuItem>
                    );
                  })}
              </TextField>

              <TextField
                id="itemStatus"
                margin="dense"
                fullWidth
                label="Status"
                value={newItem.itemStatus}
                onChange={handleChange}
                name="itemStatus"
                select
              >
                {status.map((item, index) => {
                  return index === 0 ? (
                    <MenuItem key={uuidv4()} value={item.value} default>
                      {item.value}
                    </MenuItem>
                  ) : (
                    <MenuItem key={uuidv4()} value={item.value}>
                      {item.value}
                    </MenuItem>
                  );
                })}
              </TextField>

              <TextField
                margin="dense"
                id="itemDueDate"
                label="Due date"
                type="date"
                name="itemDueDate"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
                style={{ width: "100%" }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} type="cancel" color="primary">
                Cancel
              </Button>
              <Button onClick={handleReset} type="reset" color="primary">
                Reset
              </Button>
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                type="submit"
              >
                {edit ? "Submit" : "Create"}
              </Button>
            </DialogActions>
          </Dialog>
        </ThemeProvider>
      )}
    </>
  );
}

// refactor status
const status = [
  { key: "To do", value: "To do" },
  { key: "Doing", value: "Doing" },
  { key: "On hold", value: "On hold" },
  { key: "Under review", value: "Under review" },
  { key: "Done", value: "Done" },
];

const priorityOptions = [
  { key: "low", value: "Low" },
  { key: "medium", value: "Medium" },
  { key: "high", value: "High" },
];
