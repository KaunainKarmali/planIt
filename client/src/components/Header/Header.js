import React, { useContext, useState } from "react";
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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import BookIcon from "@material-ui/icons/Book";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { UserContext } from "../../Context";
import FolderIcon from "@material-ui/icons/Folder";
import DashboardIcon from "@material-ui/icons/Dashboard";

export default function Header({ landing, sideMenu }) {
  const theme = globalThemes;
  const classes = useGlobalStyles();
  const componentClasses = useStyles();

  const [open, setOpen] = useState(false);
  const { user } = useContext(UserContext);

  function toggleDrawer(toggle) {
    setOpen(toggle);
  }

  function list() {
    return (
      <div style={{ width: "250px" }}>
        <List>
          <Link to={`/trial/dashboard`} className={componentClasses.link}>
            <ListItem button key="dashboard">
              <ListItemIcon>
                <DashboardIcon style={{ color: "#f50057" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to={`/trial`} className={componentClasses.link}>
            <ListItem button key="projects">
              <ListItemIcon>
                <FolderIcon style={{ color: "#f50057" }} />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItem>
          </Link>
        </List>
        <List>
          {user &&
            user.projects &&
            user.projects.map((project) => {
              return (
                <Link
                  key={project._id}
                  id={project._id}
                  to={`/trial/project/${project._id}`}
                  className={componentClasses.link}
                >
                  <ListItem button key={project._id} type="submit">
                    <ListItemText primary={project.projectName} />
                  </ListItem>
                </Link>
              );
            })}
        </List>
        <Divider />
      </div>
    );
  }

  return (
    <header>
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
                  {landing && (
                    <Link className={classes.link} to="/">
                      <Button size="large" color="secondary">
                        Features
                      </Button>
                    </Link>
                  )}

                  {/* About link */}
                  {landing && (
                    <Link className={classes.link} to="/">
                      <Button size="large" color="secondary">
                        About
                      </Button>
                    </Link>
                  )}

                  {/* Contact link */}
                  {landing && (
                    <Link className={classes.link} to="/">
                      <Button size="large" color="secondary">
                        Contact
                      </Button>
                    </Link>
                  )}

                  {/* Login link */}
                  {landing && (
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
                  {landing && (
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

                  {sideMenu && (
                    <div>
                      <Button
                        size="large"
                        variant="outlined"
                        color="primary"
                        onClick={() => toggleDrawer(true)}
                      >
                        <MenuIcon color="secondary" />
                      </Button>
                      <SwipeableDrawer
                        anchor="right"
                        open={open}
                        onClose={() => toggleDrawer(false)}
                        onOpen={() => toggleDrawer(true)}
                      >
                        {list()}
                      </SwipeableDrawer>
                    </div>
                  )}
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </header>
  );
}
