import React, { Component } from "react";
import NavBar from "../NavBar/Navbar";
import SwitchCard from "../SwitchCard/SwitchCard";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SwitchCard />
      </div>
    );
  }
}
export default Dashboard;
