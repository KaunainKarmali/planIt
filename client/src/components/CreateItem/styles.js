import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "5px",
    borderRadius: "4px",
    border: "dashed #dddddd medium",
    transition: ".5s ease-out",
    "&:hover": {
      border: "dashed #8ac4d0 medium",
    },
    height: "30px",
    width: "calc(100% - 6px)",
  },
  button: {
    width: "100%",
    height: "100%",
    "&:hover": {
      "& $addIcon": {
        color: "#8ac4d0",
      },
    },
  },
  addIcon: {
    color: "#dddddd",
  },
}));

export default useStyles;
