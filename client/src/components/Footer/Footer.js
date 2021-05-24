import React from "react";
import globalThemes from "../../styles/globalThemes.js";
import useGlobalStyles from "../../styles/globalStyles.js";
import useStyles from "./styles";
import { ThemeProvider, Typography, Container } from "@material-ui/core";

export default function Footer() {
  const theme = globalThemes;
  const classes = useGlobalStyles();
  const componentClasses = useStyles();
  const year = new Date().getFullYear();

  return (
    <footer>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            paragraph
            className={componentClasses.copyright}
          >
            Copyright &copy; {year}
          </Typography>
        </Container>
      </ThemeProvider>
    </footer>
  );
}
