import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
function LoginButton(props) {
  console.log("PROPS", props);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        loggedin={props.loggedin}
        handleChange={props.handleChange}
      >
        Login
      </Button>
    </div>
  );
}

export default LoginButton;
