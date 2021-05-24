import React, { useContext, useState, useEffect, useRef } from "react";
import globalThemes from "../../styles/globalThemes.js";
import useGlobalStyles from "../../styles/globalStyles.js";
import useStyles from "./styles";
import {
  Container,
  Grid,
  Typography,
  Button,
  ThemeProvider,
  Divider,
  Avatar,
  Card,
} from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { UserContext, TimerContext, ProjectContext } from "../../Context";
import CreateProject from "../CreateProject/CreateProject";
import StatusColumn from "../StatusColumn/StatusColumn";
import Timer from "../Timer/Timer";
import { saveDuration, loadDuration } from "../../api";
import { formatDuration } from "../../services/utils";
import ProjectCard from "../ProjectCard/ProjectCard";
import { v4 as uuidv4 } from "uuid";
import useSetUserState from "../../services/useSetUserState";

export default function ProjectMain() {
  const theme = globalThemes;
  const classes = useGlobalStyles();
  const componentClasses = useStyles();

  const { user, setUser } = useContext(UserContext);
  const { project, setProject } = useContext(ProjectContext);
  const { activeTimer, setActiveTimer } = useContext(TimerContext);

  const [toggle, setToggle] = useState(false);
  const [duration, setDuration] = useState(0);

  let timer = useRef(null);

  useEffect(() => {
    if (toggle === true) {
      setActiveTimer({
        ...activeTimer,
        duration: duration,
      });
    }
  }, [duration]);

  async function toggleTimer(item) {
    // scenario: turn on timer
    if (toggle === false) {
      console.log("Scenario 1");
      setActiveTimer({
        projectId: project._id,
        projectName: project.projectName,
        itemId: item._id,
        itemName: item.itemName,
        date: new Date(),
        duration: 0,
      });
      await start(item);
    }

    // scenario: timer is on and clicked the different item
    else if ((toggle === true) & (item._id !== activeTimer.itemId)) {
      console.log("Scenario 2");

      item._id !== "" && (await save());
      await stop();
      setActiveTimer({
        projectId: project._id,
        projectName: project.projectName,
        itemId: item._id,
        itemName: item.itemName,
        date: new Date(),
        duration: 0,
      });
      await start(item);
    }

    // scenario: turn off timer
    else {
      console.log("Scenario 3");

      await stop();
      await save();
      setActiveTimer({
        projectId: "",
        projectName: "",
        itemId: "",
        itemName: "",
        date: new Date(),
        duration: 0,
      });
    }
  }

  async function loadInitialDuration(userId, projectId, itemId) {
    const response = await loadDuration(userId, projectId, itemId);
    return response.data.message;
  }

  async function save() {
    // only save if the toggle turns false and there is time elapsed to be saved
    if (duration > 0) {
      const response = await saveDuration(user._id, activeTimer);

      // Update user state if response is 201
      if (response.status === 201) {
        setUser(response.data.message);
      } else {
        console.log("ERROR");
        console.log(response);
      }
    }
  }

  // start timer
  async function start(item) {
    setToggle(true);
    const initialDuration = await loadInitialDuration(
      user._id,
      project._id,
      item._id
    );
    timer.current = setInterval(() => countUp(initialDuration), 1000);
  }

  async function stop() {
    setToggle(false);
    clearInterval(timer.current);
    setDuration(0);
  }

  function countUp(initialDuration) {
    setDuration((duration) => {
      if (duration === 0) {
        return duration + initialDuration + 1;
      } else {
        return duration + 1;
      }
    });
  }

  return (
    <>
      <div className={componentClasses.container}>
        <ThemeProvider theme={theme}>
          {/* Project name */}
          <Typography align="left" color="primary" gutterBottom variant="h3">
            {project.projectName}
          </Typography>

          <AvatarGroup max={5}>
            {/* Render creator's avatar */}
            {project.creatorName && (
              <Avatar alt={`${project.creatorName}`}>{`${formatNameToInitials(
                project.creatorName
              )}`}</Avatar>
            )}

            {/* Render team's avatar */}
            {project.teamMemberNames &&
              project.teamMemberNames.map((member) => {
                return (
                  <Avatar
                    key={member.id}
                    id={member.id}
                    alt={`${member.name}`}
                    className={componentClasses.avatar}
                  >{`${formatNameToInitials(member.name)}`}</Avatar>
                );
              })}
          </AvatarGroup>

          <Divider
            variant="fullWidth"
            light
            style={{ backgroundColor: "#f4d160", height: "2px" }}
            className={componentClasses.divider}
          />
          <Grid
            container
            justify="space-between"
            alignContent="flex-start"
            alignItems="flex-start"
          >
            {/* Status columns: To do, doing, on hold, under review, done */}
            {status.map((state) => {
              return (
                <Grid
                  item
                  lg={2}
                  md={5}
                  sm={12}
                  xs={12}
                  key={state.key}
                  id={state.key}
                >
                  <StatusColumn
                    status={state.value}
                    statusKey={state.key}
                    // projectId={project._id}
                    toggleTimer={toggleTimer}
                  />
                </Grid>
              );
            })}
          </Grid>
          {toggle && (
            <div className={componentClasses.timerContainer}>
              <Card className={componentClasses.timerCard}>
                <Typography variant="h6" component="h2">
                  {activeTimer.projectName}
                </Typography>
                <Divider
                  style={{
                    marginBottom: "10px",
                    marginTop: "10px",
                    backgroundColor: "#f4d160",
                  }}
                />
                <Typography variant="subtitle1" component="h3">
                  {activeTimer.itemName}
                </Typography>
                <Typography variant="subtitle1" component="h4">
                  {formatDuration(duration)}
                </Typography>
              </Card>
            </div>
          )}
        </ThemeProvider>
      </div>
    </>
  );
  // }
}

const status = [
  { key: "To do", value: "To do" },
  { key: "Doing", value: "Doing" },
  { key: "On hold", value: "On hold" },
  { key: "Under review", value: "Under review" },
  { key: "Done", value: "Done" },
];

// Extract and format initials from the name
function formatNameToInitials(name) {
  name = name.split(" ");

  const initial = name.map((segment) => segment.substring(0, 1));
  const cleanInitial = initial.toString().replace(/,/g, "").toUpperCase();
  return cleanInitial;
}
