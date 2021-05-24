import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    bottom: 0,
    right: 0,
    margin: "10px",
    width: "175px",
    textAlign: "right",
  },
  card: {
    padding: "10px",
    backgroundColor: "#fbeeac",
  },
}));

export default useStyles;
