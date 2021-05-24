import React, { useContext, useState, useEffect } from "react";
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
} from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import CreateItem from "../CreateItem/CreateItem";
import ItemCard from "../ItemCard/ItemCard";
import { UserContext, ProjectContext } from "../../Context";
import { v4 as uuidv4 } from "uuid";

export default function StatusColumn(props) {
  const theme = globalThemes;
  const classes = useGlobalStyles();
  const componentClasses = useStyles();

  const { user, setUser } = useContext(UserContext);
  const { status, statusKey, toggleTimer } = props;
  const { project, setProject } = useContext(ProjectContext);

  // useEffect(() => {
  //   (projectId !== undefined) & (user !== undefined) &&
  //     setProject(extractProject(projectId, user)[0]);
  // }, [projectId, user]);

  return (
    <>
      <div className={componentClasses.container}>
        <ThemeProvider theme={theme}>
          <Typography align="left" color="primary" gutterBottom variant="h6">
            {status}
          </Typography>
          <CreateItem />
          {project &&
            // Refactor: project ID to be a context state
            project.list &&
            project.list.map(
              (item) =>
                item.itemStatus === statusKey && (
                  <ItemCard
                    key={item._id}
                    id={item._id}
                    item={item}
                    toggleTimer={toggleTimer}
                  />
                )
            )}
        </ThemeProvider>
      </div>
    </>
  );
}
