import React, { useState } from "react";
import globalThemes from "../../styles/globalThemes.js";
import useGlobalStyles from "../../styles/globalStyles.js";
import useStyles from "./styles";
import {
  Button,
  ThemeProvider,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  Box,
  Grid,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  const theme = globalThemes;
  const classes = useGlobalStyles();
  const componentClasses = useStyles();

  const { projectName, dueDate, id } = props;

  function handleClick() {}

  return (
    <ThemeProvider theme={theme}>
      <Card className={componentClasses.container}>
        {/* Project name */}
        <Grid
          container
          display="flex"
          direction="column"
          justify="center"
          alignItems="center"
          wrap="nowrap"
          className={componentClasses.titleContainer}
        >
          <Grid item>
            <Typography variant="h5" component="h2">
              {`${projectName}`}
            </Typography>
          </Grid>
        </Grid>

        {/* Project due date */}
        <Grid
          container
          display="flex"
          direction="column"
          justify="center"
          alignItems="center"
          wrap="nowrap"
          className={componentClasses.dueDateContainer}
        >
          <Grid item>
            <Typography variant="caption" component="p">
              {dueDate ? `Due ${dateReformat(dueDate)}` : "No due date"}
            </Typography>
          </Grid>
        </Grid>

        <Divider light style={{ backgroundColor: "#f4d160", height: "2px" }} />

        {/* Button container */}
        <Link to={`/trial/project/${id}`}>
          <Button
            // onClick={handleClick}
            type="submit"
            variant="contained"
            color="secondary"
            className={componentClasses.button}
          >
            <ArrowForwardIosIcon />
          </Button>
        </Link>
      </Card>
    </ThemeProvider>
  );
}

function dateReformat(date) {
  const newDate = new Date(date).toDateString().split(" ");
  return `${newDate[2]} ${newDate[1]} ${newDate[3]}`; // DD MMM YYYY
}
