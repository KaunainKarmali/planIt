import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "400px",
    maxWidth: "400px",
    minWidth: "400px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  chipItem: {
    listStyleType: "none",
    display: "inline-block",
  },
  addIcon: {
    padding: 0,
    margin: "12px 0",
  },
  teamContainer: {
    margin: 0,
  },
  teamTextFieldGrid: {
    width: "calc(100% - 32px)",
  },
  teamTextField: {
    width: "100%",
  },
}));

export default useStyles;
