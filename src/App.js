import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = withStyles((theme) => ({
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

// const [loggedIn, setloggedIn] = useState(false);
//tomrrow when you get home you need to finish this project already and prove to yourslelf that you got this shit
//first i will start by converting the function based component into a class based component *****FINISHED*******
//Second i need to figure out how to use the withStyles stuff out and how to  execute what i need******INPROGESS*******
//

class LoginAppBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    };
  }
  render() {
    const classes = withStyles();

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              My Music App
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default LoginAppBar;
