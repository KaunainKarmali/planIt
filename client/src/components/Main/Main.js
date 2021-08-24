import React from "react";
import globalThemes from "../../styles/globalThemes.js";
import useGlobalStyles from "../../styles/globalStyles.js";
import useStyles from "./styles";
import {
  Container,
  Grid,
  Typography,
  Button,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core";
import Feature from "../Feature/Feature";
import { Link } from "react-router-dom";

function Main(props) {
  const theme = responsiveFontSizes(globalThemes);
  const classes = useGlobalStyles();
  const componentClasses = useStyles();

  return (
    <>
      <main>
        <ThemeProvider theme={theme}>
          {/* START: Landing page top section */}
          <section className={componentClasses.landingImage}>
            <Container maxWidth="lg" className={componentClasses.container}>
              <div className={componentClasses.heroLanding}>
                <Typography
                  variant="h1"
                  gutterBottom
                  className={componentClasses.title}
                >
                  PlanIt
                </Typography>
                <Typography variant="h2" gutterBottom>
                  Reinvent your day and DO MORE.
                </Typography>
                <Link className={classes.link} to="/trial">
                  <Button
                    size="large"
                    variant="contained"
                    className={componentClasses.trialButton}
                  >
                    Start free trial
                  </Button>
                </Link>
              </div>
            </Container>
          </section>
          {/* END: Landing page top section */}

          {/* START: Features section */}
          <section>
            <Container maxWidth="lg">
              <Grid
                container
                justify="space-between"
                alignItems="center"
                spacing={4}
              >
                <Grid item xs={12} sm={6} lg={4}>
                  <Feature />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <Feature />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <Feature />
                </Grid>
              </Grid>
            </Container>
          </section>
          {/* END: Features section */}
        </ThemeProvider>
      </main>
    </>
  );
}

export default Main;
