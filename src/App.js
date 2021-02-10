import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import Dashboard from "./Components/Dashboard";
import TextField from "./Components/TextField";
import LoginButton from "./Components/Button/LoginButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function LoginAppBar() {
  const classes = useStyles();
  const [loggedIn, setloggedIn] = useState(false);
  const [toggle, settoggle] = useState({ toggle: true });
  const [slide, setslide] = useState({ slide: true });
  const [switchLife, setswitchLife] = useState({ switchLife: true });

  useEffect(() => {
    console.log("this should return logged ins state hopefuy", loggedIn);
  });

  const handleLoginClick = (event) => {
    // console.log("this button was clicked", event);
    setloggedIn(!loggedIn);
  };

  if (loggedIn) {
    return <Dashboard />;
  } else {
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              My Music App
            </Typography>
          </Toolbar>
        </AppBar>
        <TextField />
        <LoginButton onClick={handleLoginClick} loggedin={{ loggedIn }} />
      </div>
    );
  }
}
