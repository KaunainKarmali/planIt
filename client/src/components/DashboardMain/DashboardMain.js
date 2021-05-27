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
  CardHeader,
  CardContent,
  CardActions,
} from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { UserContext, TimerContext, ProjectContext } from "../../Context";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { BarGraph } from "../../components";

import { saveDuration, loadDuration } from "../../api";
import { formatDuration } from "../../services/utils";
import { v4 as uuidv4 } from "uuid";
import useSetUserState from "../../services/useSetUserState";

export default function DashboardMain() {
  const theme = globalThemes;
  const classes = useGlobalStyles();
  const componentClasses = useStyles();

  const { user, setUser } = useContext(UserContext);

  const [totalItems, itemsOpen, itemsDone] = extractItemCount(user);
  const totalProjects = user.projects.length;

  return (
    <>
      <div className={componentClasses.container}>
        <ThemeProvider theme={theme}>
          <Typography align="left" color="primary" gutterBottom variant="h3">
            Dashboard
          </Typography>

          <Divider
            variant="fullWidth"
            light
            style={{ backgroundColor: "#f4d160", height: "2px" }}
            className={componentClasses.divider}
          />
          <Grid
            container
            direction="row"
            justify="space-between"
            alignContent="flex-start"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item sm={12} md={6} lg={4}>
              <Card className={componentClasses.card}>
                <div style={{ margin: "20px" }}>
                  <Grid
                    container
                    spacing={3}
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <AssignmentTurnedInIcon
                        style={{
                          color: "#f4d160",
                          width: "50px",
                          height: "50px",
                        }}
                      />
                    </Grid>
                    <Grid item style={{ textAlign: "left" }}>
                      <Typography
                        variant="h5"
                        component="h2"
                        style={{ fontWeight: "bold" }}
                      >
                        Project
                      </Typography>
                      <Typography variant="body1" component="h2">
                        Overall KPIs
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <Divider
                  style={{ height: "3px", backgroundColor: "#f4d160" }}
                />
                <CardContent>
                  {/* Project count */}
                  <Grid
                    container
                    alignItems="center"
                    justify="center"
                    spacing={3}
                  >
                    <Grid item>
                      <Typography
                        variant="body1"
                        component="p"
                        style={{ fontSize: "6rem", textAlign: "left" }}
                      >
                        {totalProjects}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        component="p"
                        style={{ fontSize: "2rem", textAlign: "left" }}
                      >
                        Projects
                      </Typography>
                      <Typography
                        variant="body1"
                        component="p"
                        style={{ textAlign: "left", color: "#8ac4d0" }}
                      >
                        in progress
                      </Typography>
                    </Grid>
                  </Grid>

                  <Divider style={{ backgroundColor: "#8ac4d0" }} />

                  {/* Item count */}
                  <Grid
                    container
                    alignItems="center"
                    justify="center"
                    spacing={3}
                  >
                    <Grid item>
                      <Typography
                        variant="body1"
                        component="p"
                        style={{ fontSize: "6rem", textAlign: "left" }}
                      >
                        {totalItems}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        component="p"
                        style={{ fontSize: "2rem", textAlign: "left" }}
                      >
                        Items
                      </Typography>
                      <Typography
                        variant="body1"
                        component="p"
                        style={{ textAlign: "left", color: "#8ac4d0" }}
                      >
                        in total
                      </Typography>
                    </Grid>
                  </Grid>

                  {/* Item sub-total container */}
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="space-between"
                    alignContent="center"
                  >
                    {/* Item in progress count */}
                    <Grid item>
                      <ProgressContainer
                        counter={itemsDone}
                        counterText="Completed"
                        counterColor="#95e1d3"
                      />
                    </Grid>
                    <Grid item>
                      <ProgressContainer
                        counter={itemsOpen}
                        counterText="In progress"
                        counterColor="#fce38a"
                      />
                    </Grid>

                    <Grid item>
                      <ProgressContainer
                        //   To create function to extract items overdue
                        counter={0}
                        counterText="Overdue"
                        counterColor="#f38181"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sm={12} md={6} lg={8}>
              <Card className={componentClasses.card}>
                <div style={{ margin: "20px" }}>
                  <BarGraph projects={user.projects} />
                  {/* <Grid
                    container
                    spacing={3}
                    justify="center"
                    alignItems="center"
                  ></Grid> */}
                </div>
              </Card>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    </>
  );
}

function extractItemCount(user) {
  let countAll = 0;
  let countOpen = 0;
  let countDone = 0;

  for (let project = 0; user.projects.length > project; project++) {
    const listLength = user.projects[project].list.length;

    for (let item = 0; listLength > item; item++) {
      if (user.projects[project].list[item] === "done") {
        countDone++;
      } else {
        countOpen++;
      }
    }
  }

  countAll = countOpen + countDone;

  return [countAll, countOpen, countDone];
}

function ProgressContainer(props) {
  const { counter, counterText, counterColor } = props;

  return (
    <Grid item container alignItems="center" justify="flex-start" spacing={1}>
      <Grid item>
        <Typography
          variant="body1"
          component="p"
          style={{
            // fontSize: "1.5rem",
            textAlign: "left",
            backgroundColor: `${counterColor}`,
            color: "black",
            padding: "3px",
            minWidth: "25px",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          {counter}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="body1"
          component="p"
          style={{ fontSize: "0.8rem", textAlign: "left" }}
        >
          {counterText}
        </Typography>
      </Grid>
    </Grid>
  );
}
