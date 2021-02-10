import React from "react";
import Switch from "@material-ui/core/Switch";

export default function Switches(props) {
  console.log("whats in this props", props);

  return (
    <div>
      <Switch
        checked={props.checked}
        onChange={props.handleChange}
        color="secondary"
        name="checkedA"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
}
