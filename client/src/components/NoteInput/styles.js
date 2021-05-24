import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "inline-block",
    position: "relative",
  },
  card: {
    margin: "30px",
    padding: "30px",
    display: "flex",
    flexwrap: "wrap",
    justifycontent: "center",
    alignItems: "flex-start",
    width: "300px",
  },
  textField: {
    margin: "10px",
    width: "300px",
    borderColor: "#8ac4d0",
  },
  iconButton: {
    position: "absolute",
    bottom: "10px",
    right: "190px",
    borderRadius: "50%",
    padding: "5px",
    height: "40px",
    width: "40px",
    border: "none",
    backgroundColor: "#f50057",
    "&:hover": {
      backgroundColor: "#bb002f",
    },
  },
  icon: {
    // color: "white",
  },
}));

export default useStyles;
