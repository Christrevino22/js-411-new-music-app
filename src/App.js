import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Dashboard from "./Components/Dashboard/Dashboard";
import TextField from "./Components/TextField/Textfield";
import LoginButton from "./Components/Button/LoginButton";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

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
//1ST i will start by converting the function based component into a class based component *****FINISHED*******
//2ND i need to figure out how to use the withStyles stuff out and how to  execute what i need****FINISHED*****
//3RD ILL NEED TO MAKE THE USERNAME AND PASSWORD TEXTFIELDS*******FINISHED*****
//4TH ILL NEED TO CREATE A BUTTON UNDER MY TEXTFIELD******FINSIHED******
//5TH ILL NEEED TO CREATE A DASHBOARD COMPONENT *****FINISHED******
//6TH NEED TO FIND A WAY TO ADD FUNCITONALITY TO MY LOGIN BUTTON
//NEED TO TOO CATCH UP THIS PROJECT IS DUE ON TUESDAY

class LoginAppBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    };
  }

  handleChange = (event) => {
    this.setState({ loggedIn: !this.state.loggedIn });
  };
  componentDidMount() {
    console.log("Mounted", this.state.loggedIn);
  }

  componentDidUpdate() {
    console.log("UPDATED", this.state.loggedIn);
  }

  render() {
    const classes = withStyles;

    return this.state.loggedIn ? (
      <Dashboard />
    ) : (
      // the code for your login screen
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              My Music App
            </Typography>
            {/* LOGIN SHOULD BE AROUND HERE MORE OR LESS NEED TO REMEMBER HOW I DID MY OTHER PAGE  */}
          </Toolbar>
        </AppBar>
        <TextField />
        <LoginButton
          loggedIn={this.state.loggedIn}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default LoginAppBar;
