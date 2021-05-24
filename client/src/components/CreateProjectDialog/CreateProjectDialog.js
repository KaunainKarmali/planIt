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
  IconButton,
  Chip,
  Grid,
} from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddIcon from "@material-ui/icons/Add";
import { v4 as uuidv4 } from "uuid";
import { UserContext } from "../../Context";
import { createProject } from "../../api/index";

export default function CreateProjectDialog(props) {
  const theme = globalThemes;
  const classes = useGlobalStyles();
  const componentClasses = useStyles();

  // Global user state
  const { user, setUser } = useContext(UserContext);

  // props manage whether to show dialog box or not
  const { open, setOpen } = props;

  // state stores new project details
  const [newProject, setNewProject] = useState({
    projectName: "",
    engagementCode: "",
    creatorName: "",
    teamMemberNames: [],
    dueDate: "",
    status: "To do",
  });

  // state stores team-member names temporarily before they are assigned to the projects state
  const [team, setTeam] = useState([]);

  // state stores a single team member's name temporarily before they are assigned to the team state
  const [newTeamMember, setNewTeamMember] = useState("");

  const [createNewProject, setCreateNewProject] = useState(false);

  useEffect(() => {
    if (createNewProject) {
      submitProject(user._id, newProject);
    }
  }, [createNewProject]);

  // callback to track user's keystrokes
  function handleChange(event) {
    const key = event.target.name;
    const value = event.target.value;

    if (key === "teamMemberNames") {
      setNewTeamMember(value);
    } else {
      setNewProject({
        ...newProject,
        [key]: value,
      });
    }
  }

  // callback to track when a new team member is added to the roster
  function handleAddTeam(event) {
    setTeam(
      team.concat({
        id: uuidv4(),
        name: newTeamMember,
      })
    );
    setNewTeamMember("");
  }

  // callback to delete a team member from the roster
  const handleMemberDelete = (chipToDelete) => () => {
    setTeam(team.filter((member) => member.id !== chipToDelete.id));
  };

  // callback to edit a team member in the roster
  const handleMemberEdit = (chipToEdit) => () => {
    setNewTeamMember(chipToEdit.name);
    setTeam(team.filter((member) => member.id !== chipToEdit.id));
  };

  // callback to clear the user's new project form and reset all the state variables
  function handleReset() {
    setOpen(true);
    setCreateNewProject(false);
    setNewTeamMember("");
    setTeam([]);
    setNewProject({
      projectName: "",
      engagementCode: "",
      creatorName: "",
      teamMemberNames: [],
      startDate: "",
      dueDate: "",
      status: "",
    });
  }

  // callback to clear the user's new project form and reset all the state variables when form is closed
  function handleClose() {
    handleReset();
    setOpen(false);
  }

  // callback to create a new project and reset temporary state variables
  function handleCreate(event) {
    event.preventDefault();

    setNewProject({
      ...newProject,
      teamMemberNames: team,
    });

    setCreateNewProject(true);
  }

  async function submitProject(userId, newProject) {
    // console.log("SUBMITTING PROJECT...");
    // console.log(userId);

    const response = await createProject(userId, newProject);

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
    <ThemeProvider theme={theme}>
      <Dialog
        onClose={handleClose}
        aria-labelledby="create-new-project"
        open={open}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="create-new-project">Create a new project</DialogTitle>

        <DialogContent dividers={true}>
          <TextField
            autoFocus
            margin="dense"
            id="projectName"
            label="Project name"
            type="text"
            name="projectName"
            onChange={handleChange}
            value={newProject.projectName}
            fullWidth
          />
          <TextField
            margin="dense"
            id="engagementCode"
            label="Engagement code"
            type="text"
            name="engagementCode"
            onChange={handleChange}
            value={newProject.engagementCode}
            fullWidth
          />
          <TextField
            margin="dense"
            id="creatorName"
            label="Creator name"
            type="text"
            name="creatorName"
            onChange={handleChange}
            value={newProject.name}
            fullWidth
          />

          <Grid
            container
            spacing={1}
            alignItems="flex-end"
            className={componentClasses.teamContainer}
          >
            <Grid item className={componentClasses.teamTextFieldGrid}>
              <TextField
                margin="dense"
                id="teamMemberNames"
                label="Team member names"
                type="text"
                name="teamMemberNames"
                onChange={handleChange}
                value={newTeamMember}
                className={componentClasses.teamTextField}
              />
            </Grid>
            <Grid item>
              <IconButton
                color="primary"
                aria-label="Add team member"
                onClick={handleAddTeam}
                className={componentClasses.addIcon}
              >
                <AddCircleIcon />
              </IconButton>
            </Grid>
          </Grid>

          <Grid
            container
            style={{
              minHeight: "75px",
              margin: 0,
              width: "100%",
            }}
            spacing={1}
            wrap="wrap"
            justify="flex-start"
            alignItems="flex-start"
            alignContent="flex-start"
          >
            {team &&
              team.map((member) => {
                return (
                  <Grid key={uuidv4()} item>
                    <li key={uuidv4()} className={componentClasses.chipItem}>
                      <Chip
                        key={member.id}
                        name="teamMember"
                        color="secondary"
                        size="small"
                        onClick={handleMemberEdit(member)}
                        onDelete={handleMemberDelete(member)}
                        label={member.name}
                        icon={<FaceIcon />}
                        className={componentClasses.chip}
                        clickable
                      />
                    </li>
                  </Grid>
                );
              })}
          </Grid>

          <Grid container spacing={2} justify="space-between">
            <Grid item style={{ width: "50%" }}>
              <TextField
                margin="dense"
                id="startDate"
                label="Start date"
                type="date"
                name="startDate"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
                style={{ width: "100%" }}
              />
            </Grid>

            <Grid item style={{ width: "50%" }}>
              <TextField
                margin="dense"
                id="dueDate"
                label="Due date"
                type="date"
                name="dueDate"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} type="cancel" color="primary">
            Cancel
          </Button>
          <Button onClick={handleReset} type="reset" color="primary">
            Reset
          </Button>
          <Button
            onClick={handleCreate}
            variant="contained"
            color="primary"
            type="submit"
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
