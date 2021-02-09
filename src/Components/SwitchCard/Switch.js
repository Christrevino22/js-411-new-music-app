import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";

export default function Switches(props) {
  console.log("whats in this props", props)

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        // checked={}
        onChange={handleChange}
        color="secondary"
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
}
