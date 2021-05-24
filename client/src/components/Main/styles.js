import { makeStyles } from "@material-ui/core/styles";
import landingImage from "../../images/landing-page-img-2.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "64px",
    position: "relative",
  },
  heroLanding: {
    width: "50%",
    position: "absolute",
    top: "15vh",
    right: "0",
  },
  landingImage: {
    backgroundImage: `url(${landingImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    width: "auto",
  },
  title: {
    color: "#f50057",
  },
  trialButton: {
    backgroundColor: "#f4d160",
    "&:hover": {
      backgroundColor: "#bea02f",
    },
  },
}));

export default useStyles;
