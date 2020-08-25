import React, { useCallback } from "react";
import { withRouter } from "react-router";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Fab } from "@material-ui/core";
import fire from "./back/fire";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: 10,
    // "& .MuiInput-underline:before": {
    //   content: "none",
    // },
    marginTop: 10,
    "& .MuiInput-underline:before": {
      content: "none",
    },
    "& .MuiInputBase-root": {
      color: "white",
      backgroundColor: "#5892F6",
    },
    "& .MuiCheckbox-root": {
      color: "#5892F6",
    },
  },
  arrow: {
    display: "flex",
    alignItems: "left",
  },
  rest: {
    marginTop: 5,
  },
  input: {
    marginTop: 0,
    marginBottom: 23,
    padding: 8,
    paddingBottom: 2,
    borderRadius: 28,
    boxShadow: "0 2px 2px 2px #5892F6",
    width: 280,
    backgroundColor: "#5892F6",
    "& .MuiInputBase-input-webkit-text-fill": {
      color: "#5892F6",
    },
  },
  inputimg: {
    // padding: theme.spacing(1),
    backgroundColor: "#5892F6",
    height: 21,
    width: 21,
    marginLeft: 13,
    marginRight: 5,
  },
}));

function SignIn({ history }) {
  const classes = useStyles();

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await fire
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        {
          console.log(" hiii ");
          history.push("/home");
        }
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className={classes.root}>
      <Link href="/login">
        <img
          src="assets/arrow-left-thick.svg"
          alt="scale"
          className={classes.arrow}
        />
      </Link>
      <section className={classes.rest}>
        <img
          src="assets/scale.png"
          alt="scale"
          height="120pt"
          width="120pt"
          style={{ marginBottom: 10 }}
        />
        <Typography
          style={{
            fontSize: "32pt",
            marginTop: 10,
            marginBottom: -10,
            fontWeight: "bold",
          }}
          color="primary"
        >
          Sign In
        </Typography>
        <Typography
          color="primary"
          variant="body1"
          style={{ marginTop: 10, marginBottom: 40 }}
        >
          Enjoy our application
        </Typography>
      </section>
      <form color="primary" onSubmit={handleLogin}>
        <FormControlLabel
          control={<Checkbox value="mobile" color="primary" />}
          label="Use mobile number"
          style={{
            align: "center",
            // display: "flex",
            marginLeft: "-14%",
            color: "#5892F6",
            fontSize: "12pt",
          }}
        />

        <br></br>
        <TextField
          placeholder="Email"
          className={classes.input}
          color="primary"
          id="email"
          type="email"
          backgroundColor="#5892F6"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src="assets/email.svg"
                  alt="email"
                  className={classes.inputimg}
                />
              </InputAdornment>
            ),
          }}
        />
        <br></br>
        <TextField
          placeholder="Password"
          className={classes.input}
          color=""
          id="password"
          type="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src="assets/key.svg"
                  alt="key"
                  className={classes.inputimg}
                />
              </InputAdornment>
            ),
          }}
        />
        <br></br>
        <Fab
          type="submit"
          color="primary"
          variant="extended"
          style={{
            textTransform: "none",
            width: 150,
            marginTop: 23,
            marginBottom: 18,
          }}
        >
          <Typography>Sign In</Typography>
        </Fab>
      </form>
      <Link href="#" variant="body2">
        Forgot your password?
      </Link>
      <br></br>
      <Link href="/signup" variant="body2">
        New user? Create an account
      </Link>
    </div>
  );
}
export default withRouter(SignIn);
