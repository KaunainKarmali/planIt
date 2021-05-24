import { makeStyles } from "@material-ui/core/styles";
import image from "../../images/inspiration-geometry.png";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${image})`,
    height: "100vh",
  },
  createProjectContainer: {
    width: "200px",
  },
}));

export default useStyles;
