import React, { useContext } from "react";
import globalThemes from "../../styles/globalThemes.js";
import useStyles from "./styles";
import { Typography, ThemeProvider } from "@material-ui/core";
import CreateItem from "../CreateItem/CreateItem";
import ItemCard from "../ItemCard/ItemCard";
import { ProjectContext } from "../../Context";

export default function StatusColumn(props) {
  const theme = globalThemes;
  const componentClasses = useStyles();

  const { status, statusKey, toggleTimer } = props;
  const { project } = useContext(ProjectContext);

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
