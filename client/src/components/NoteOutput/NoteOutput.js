import React from "react";
import globalThemes from "../../styles/globalThemes.js";
import useStyles from "./styles";
import {
  ThemeProvider,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";

function NoteInput(props) {
  // Themes
  const theme = globalThemes;
  const componentClasses = useStyles();

  // Global state
  const { title, content } = props;

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={componentClasses.container}>
          <Card className={componentClasses.card}>
            <CardContent className={componentClasses.textArea}>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {content}
              </Typography>
            </CardContent>

            <CardActions className={componentClasses.buttonContainer}>
              <div>
                <Button
                  className={componentClasses.button}
                  size="small"
                  color="secondary"
                >
                  <EditIcon />
                </Button>

                <Button
                  className={componentClasses.button}
                  size="small"
                  color="secondary"
                >
                  <CheckCircleIcon />
                </Button>

                <Button
                  className={componentClasses.button}
                  size="small"
                  color="secondary"
                >
                  <SwapHorizontalCircleIcon />
                </Button>
              </div>
              <div>
                <Button
                  className={componentClasses.button}
                  size="small"
                  color="secondary"
                >
                  <DeleteIcon />
                </Button>
              </div>
            </CardActions>
          </Card>
        </div>
      </ThemeProvider>
    </>
  );
}

export default NoteInput;
