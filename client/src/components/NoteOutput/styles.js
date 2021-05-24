import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "inline-block",
    width: "300px",
    textAlign: "left",
    margin: "10px",
  },
  card: {
    minHeight: "200px",
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    justifycontent: "space-between",
  },
  flexContainer: {},
  textArea: {
    flexGrow: 10,
  },
  buttonContainer: {
    flexGrow: 0,
    display: "flex",
    justifycontent: "space-between",
    alignItems: "center",
  },
  button: {
    minWidth: "10px",
  },
  buttonArea: {},
}));

export default useStyles;
