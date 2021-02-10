import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects(props) {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple"></InputLabel>
        <Select
          // native
          value={props.value}
          onChange={props.handleChange}
          inputProps={{
            name: "Normal",
            id: "age-native-simple",
          }}
        >
           <option aria-label="None" value="Normal" />
           <option value={10}>Low</option>
           <option value={20}>Normal</option>
           <option value={30}>Loud</option>
        </Select>
      </FormControl>
    </div>
  );
}
