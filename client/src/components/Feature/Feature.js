import React from "react";
import globalThemes from "../../styles/globalThemes.js";
import useStyles from "./styles";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
  ThemeProvider,
} from "@material-ui/core";

function Feature() {
  const theme = globalThemes;
  const componentClasses = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card className={componentClasses.card} variant="outlined">
        <CardMedia
          className={componentClasses.media}
          image="https://picsum.photos/200/200"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Feature one
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Typography>
        </CardContent>
        {console.log("new feature")};
        <CardActions>
          <Button size="medium" color="primary">
            Learn more
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}

export default Feature;
