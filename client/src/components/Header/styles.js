import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "0px 8px",
    border: "2px solid",
    "&:hover": {
      border: "2px solid",
      backgroundColor: "#5a939f",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

export default useStyles;
