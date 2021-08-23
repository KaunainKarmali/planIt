import React, { useContext, useState } from "react";
import globalThemes from "../../styles/globalThemes.js";
import useGlobalStyles from "../../styles/globalStyles.js";
import useStyles from "./styles";
import {
  Container,
  Grid,
  Typography,
  Button,
  ThemeProvider,
  Card,
  Divider,
} from "@material-ui/core";
import { UserContext } from "../../Context";
import CreateProject from "../CreateProject/CreateProject";
import ProjectCard from "../ProjectCard/ProjectCard";
import { v4 as uuidv4 } from "uuid";

export default function TrialMain() {
  const theme = globalThemes;
  const classes = useGlobalStyles();
  const componentClasses = useStyles();

  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <div className={componentClasses.container}>
        <ThemeProvider theme={theme}>
          {/* Page title */}
          <Typography align="left" color="primary" gutterBottom variant="h3">
            Projects
          </Typography>
          <Divider
            variant="fullWidth"
            light
            style={{ backgroundColor: "#f4d160", height: "2px" }}
            className={componentClasses.divider}
          />
          <Grid
            container
            display="flex"
            justify="flex-start"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
            style={{ marginTop: "100px" }}
          >
            {user &&
              user.projects.map((project) => {
                return (
                  <Grid item key={uuidv4()}>
                    <ProjectCard
                      key={project._id}
                      id={project._id}
                      projectName={project.projectName}
                      dueDate={project.dueDate}
                    />
                  </Grid>
                );
              })}
            <Grid item>
              <CreateProject />
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    </>
  );
}
