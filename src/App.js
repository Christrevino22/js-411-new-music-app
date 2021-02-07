import React, { usestate } from "react";
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
//6TH NEED TO FIND A WAY TO ADD FUNCITONALITY TO MY LOGIN BUTTON*******IN PROGRESS STILL COULDN'T FIGURE IT OUT AS FAR AS MAKING THE STATE WITH THE LOGIN BUTTON TO WORK, SENT MATT A MESSSAGE HOPEFULLY HE RESPONDS BEFORE TUESDAY
//7TH CREATE A NAVBAR FOR THE DASHBOARD*****FINISHED******
//8TH CREATE (3) DIFFERENT CARDS*******FINISHED*****
//9TH NEED TO CREATE A SWITCH CARD*******FINSIHED*******
//10TH NEED TO CREATE A SLIDER CARD******FINISHED******
//11TH NEED TO CREATE A SELECT CARD*******FINSIHED******
//WHEN I GET HERE I WILL START WITH THE SYSTEM REQUIREMENTS PROCESS....

function LoginAppBar() {
  const [loggedIn, setloggedIn] = usestate({
    loggedIn: false,
  });
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     loggedIn: false,

  //   };

  // componentDidMount() {
  //   console.log("Mounted", this.state.loggedIn);
  // }

  // componentDidUpdate() {
  //   console.log("UPDATED", this.state.loggedIn);
  // }
  //maybe it isnt working because i might need to add some state to the username and password because Matt didnt have to out any specific text i guess as long as the the user and pass have more than ZERO CHARACTERS if it does have zero characters it will deny you......???????>>......
  //IT WAS BECAUSE I WAS TRYING TO ADD LOGGEDIN AS A PROP BUT IT DIDN'T DO ANYTHING, SO ONCE IT WAS REMOVED EVERTYTHING STARTED FUNCTIONING LIKE IT WAS SUPPOSED TOO.
  const onClick = (event) => {
    // console.log("this button was clicked", event);
    setloggedIn({ loggedIn: !this.state.loggedIn });
  };

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
        </Toolbar>
      </AppBar>
      <TextField />
      <LoginButton
        onClick={onClick}
        // loggedIn={this.state.loggedIn}
      />
    </div>
  );
}

export default LoginAppBar;
