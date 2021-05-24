import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "5px",
    padding: "10px",
    width: "100%",
    height: "100%",
    color: "#000",
    backgroundColor: "#8ac4d0",
    opacity: "75%",
    transition: "opacity .5s ease-out",
    "&:hover": {
      opacity: "100%",
    },
    position: "relative",
  },
  titleContainer: {
    minHeight: "50px",
    textAlign: "left",
    marginBottom: "10px",
  },
  optionsIcon: {
    width: "20px",
    color: "#5a939f",
  },
  iconButton: {
    padding: "2px",
  },
  avatar: {
    backgroundColor: "#28527a",
    color: "#fff",
    border: "#5a939f",
    fontSize: "0.75rem",
    height: "25px",
    width: "25px",
    // padding: "20px",
  },
  calendarIcon: {
    color: "#f50057",
  },
  timerIconButton: {
    color: "#f4d160",
    width: "30px",
    height: "30px",
    padding: "5px",
  },
  dropdown: {
    position: "absolute",
    background: "#000",
    color: "#fff",
    zIndex: "10",
    top: "40px",
    right: "10px",

    borderRadius: "5px",
    padding: "0",
  },
}));

export default useStyles;
