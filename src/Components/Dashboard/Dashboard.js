import React, { Component } from "react";
import NavBar from "../NavBar/Navbar";
import SwitchCard from "../SwitchCard/SwitchCard";
import SliderCard from "../SliderCard/SliderCard";
import SelectCard from "../SelectCard/SelectCard";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Welcome User!</h1>
        <SwitchCard />
        <SliderCard />
        <SelectCard />
      </div>
    );
  }
}
export default Dashboard;
