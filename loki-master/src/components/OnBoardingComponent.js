import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  scaleimg: {
    marginTop: 260,
    marginBottom: 20,
  },
});

export function OnBoard() {
  const classes = useStyles();
  return (
    <Link to="/login" style={{ textDecoration: "none" }}>
      <div>
        <br />
        <img
          src="assets/scale.png"
          alt="scale"
          height="141px"
          width="141px"
          className={classes.scaleimg}
        />
        <Typography variant="h4" color="primary">
          Accounting
        </Typography>
        <Typography variant="body1" color="primary">
          Manage your daily _ _ _
        </Typography>
      </div>
    </Link>
  );
}
