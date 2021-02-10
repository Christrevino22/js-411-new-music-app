import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Select from "../SelectCard/Select";
import { FormControl } from "@material-ui/core";

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

export default function SimpleCard() {
  const classes = useStyles();
  const [state, setState] = useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          <h1>Sound Quality</h1>
        </Typography>
        <Typography variant="body2" component="p">
          Manually control the music
          <br />
          quality in event of poor
          <br />
          connection
        </Typography>
      </CardContent>
      <CardActions>
        <FormControl />
        <Select
          native
          value={state.value}
          onChange={handleChange}
          //   inputProps={{
          //     name: "Normal",
          //     id: "age-native-simple",
          //   }}
          // >
          //   <option aria-label="None" value="Normal" />
          //   <option value={10}>Low</option>
          //   <option value={20}>Normal</option>
          //   <option value={30}>Loud</option>
        />
      </CardActions>
      {state.value === 10 && <p>YOUR MUSICS TOO LOUD!!!!</p>}
    </Card>
  );
}
