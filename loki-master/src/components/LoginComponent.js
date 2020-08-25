import React, { useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import fire from "./back/fire";
import { AuthContext } from "../Auth";
import * as firebase from "firebase/app";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 70,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  eorp: {
    backgroundColor: "transparent",
    color: "#5892F6",
    textTransform: "none",
    marginTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderColor: "#5892F6;",
    borderStyle: "solid",
    border: "1px",
  },
  socialIcons: {
    margin: theme.spacing(1.5),
  },
  socIco: {
    margin: theme.spacing(2),
  },
}));

function Login() {
  const classes = useStyles();
  const signInFB = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/home" />;
  }

  return (
    <div className={classes.root}>
      <section>
        <img
          src="assets/scale.png"
          alt="scale"
          height="100px"
          width="100px"
          style={{ marginBottom: 10 }}
        />
        <Typography
          style={{ fontSize: 32, fontWeight: "bold" }}
          color="primary"
        >
          Sign Up
        </Typography>
        <Typography
          color="primary"
          variant="body1"
          style={{ marginTop: 0, marginBottom: 50 }}
        >
          It's easier to signup now
        </Typography>
      </section>
      <Fab
        color="primary"
        variant="extended"
        style={{ textTransform: "none" }}
        onClick={signInFB}
      >
        <img
          src="assets/facebook.svg"
          alt="facebook"
          className={classes.icon}
        ></img>
        <Typography>Continue with Facebook</Typography>
      </Fab>
      <br></br>
      <Link to="/signup" style={{ textDecoration: "none" }}>
        <Fab
          size="large"
          variant="extended"
          color="primary"
          className={classes.eorp}
        >
          <Typography>I'll use email or phone</Typography>
        </Fab>
      </Link>
      <br></br>
      <div className={classes.socialIcons}>
        <img
          src="assets/google-plus.svg"
          alt="G+"
          className={classes.socIco}
        ></img>
        <img src="assets/twitter.svg" alt="T" className={classes.socIco}></img>
        <img src="assets/linkedin.svg" alt="I" className={classes.socIco}></img>
      </div>
      <br></br>

      <Typography color="primary">
        already have account?
        <Link to="signin">Login</Link>
      </Typography>
    </div>
  );
}
export default withRouter(Login);
