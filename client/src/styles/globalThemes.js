import { withTheme } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

const globalThemes = createMuiTheme({
  palette: {
    primary: {
      light: "#597ea9",
      main: "#28527a",
      dark: "#002a4e",
      contrastText: "#fff",
    },
    secondary: {
      light: "#bcf7ff",
      main: "#8ac4d0",
      dark: "#5a939f",
      contrastText: "#000",
    },
  },
});

export default globalThemes;
