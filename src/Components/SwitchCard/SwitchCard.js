import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Switch from "./Switch";

const useStyles = makeStyles({
  root: {
    width: "225px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SwitchCard() {
  const [state, setState] = useState({
    checkedA: false,
  });

  useEffect(() => {
    console.log(state);
  });

  const handleChange = (event) => {
    console.log(event.target.name, event.target.checked);
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          <h1>Online Modes</h1>
        </Typography>
        <Typography variant="body2" component="p">
          Is this application connected
          <br />
          to the internet?
        </Typography>
      </CardContent>
      <CardActions>
        <Switch checked={state.checkedA} handleChange={handleChange} />
      </CardActions>
      {state.checkedA === false && <p>You are offline now</p>}
    </Card>
  );
}
