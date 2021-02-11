import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slider from "./Slider";
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

export default function SliderCard() {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          <p>Master Volume</p>
        </Typography>
        <Typography variant="body2" component="p">
          Overides all other sound
          <br />
          settings in this application
        </Typography>
      </CardContent>
      <CardActions>
        <Slider value={value} handleChange={handleChange} />
      </CardActions>
      {value >= 80 && <p>Your volume is too HIGH!!</p>}
    </Card>
  );
}
