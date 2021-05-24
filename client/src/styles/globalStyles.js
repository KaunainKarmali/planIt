import { makeStyles } from "@material-ui/core/styles";

const useGlobalStyles = makeStyles((theme) => ({
  color: {
    primary: "#28527a",
    secondary1: "#8ac4d0",
    secondary2: "#f4d160",
    secondard3: "#fbeeac",
    secondard4: "#f50057",
    white: "#fff",
    black: "#000",
  },
  button: {
    border: "2px solid",
    "&:hover": {
      border: "2px solid",
    },
  },
  link: {
    textDecoration: "none",
  },
}));

export default useGlobalStyles;
