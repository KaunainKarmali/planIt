import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "5px",
    width: "200px",
    height: "206px",
    color: "#fff",
    backgroundColor: "#28527a",
    opacity: "80%",
    transition: "opacity .5s ease-out",
    "&:hover": {
      opacity: "100%",
    },
  },
  titleContainer: {
    height: "130px",
  },
  dueDateContainer: {
    height: "25px",
    padding: "5px",
    color: "#8ac4d0",
  },
  buttonContainer: {},
  button: {
    width: "100%",
    height: "51px",
    borderRadius: "0 0 4px 4px",
    color: "#f4d160",
  },
}));

export default useStyles;
