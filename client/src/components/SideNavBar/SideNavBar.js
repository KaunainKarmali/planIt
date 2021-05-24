import React from "react";
import globalThemes from "../../styles/globalThemes.js";
import useGlobalStyles from "../../styles/globalStyles.js";
import useStyles from "./styles";
import {
  Button,
  AppBar,
  ThemeProvider,
  Toolbar,
  Grid,
  Container,
} from "@material-ui/core";
import BookIcon from "@material-ui/icons/Book";
import { Link } from "react-router-dom";

export default function SideNavBar({ hide }) {
  const theme = globalThemes;
  const classes = useGlobalStyles();
  const componentClasses = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar>
          <Toolbar>
            <Container maxWidth="lg">
              <Grid
                container
                justify="space-between"
                alignItems="center"
                direction="row"
                flexwrap="nowrap"
              >
                {/* Logo */}
                <Grid item>
                  <Link className={classes.link} to="/">
                    <BookIcon color="secondary" fontSize="large" />
                  </Link>
                </Grid>

                {/* Features link */}
                <Grid item>
                  {!hide && (
                    <Link className={classes.link} to="/">
                      <Button size="large" color="secondary">
                        Features
                      </Button>
                    </Link>
                  )}

                  {/* About link */}
                  {!hide && (
                    <Link className={classes.link} to="/">
                      <Button size="large" color="secondary">
                        About
                      </Button>
                    </Link>
                  )}

                  {/* Contact link */}
                  {!hide && (
                    <Link className={classes.link} to="/">
                      <Button size="large" color="secondary">
                        Contact
                      </Button>
                    </Link>
                  )}

                  {/* Login link */}
                  {!hide && (
                    <Link className={classes.link} to="/">
                      <Button
                        size="large"
                        variant="outlined"
                        color="secondary"
                        className={`${
                          (classes.button, componentClasses.button)
                        }`}
                      >
                        Sign in
                      </Button>
                    </Link>
                  )}

                  {/* Sign up button */}
                  {!hide && (
                    <Link className={classes.link} to="/">
                      <Button
                        size="large"
                        variant="contained"
                        color="secondary"
                      >
                        Sign up
                      </Button>
                    </Link>
                  )}
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
}
