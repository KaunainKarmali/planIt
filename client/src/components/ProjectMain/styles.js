import { makeStyles } from "@material-ui/core/styles";
import image from "../../images/inspiration-geometry.png";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: "#8ac4d0",
    color: "#28527a",
  },
  divider: {
    margin: "20px 0",
  },
  container: {
    padding: "25px 50px",
    backgroundImage: `url(${image})`,
    height: "100vh",
  },
  timerContainer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    margin: "10px",
    width: "175px",
    textAlign: "right",
  },
  timerCard: {
    textAlign: "left",
    padding: "10px",
    minHeight: "150px",
    color: "#fff",
    backgroundColor: "#28527a",
  },
}));

export default useStyles;
