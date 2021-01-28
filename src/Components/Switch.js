import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switches(props) {
  // console.log('props', props);
  // const [state, setState] = useState({
  //   checked: true,
  // });

  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  return (
    <div>
      <Switch
        checked={props.checked}
        onChange={props.handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
}
