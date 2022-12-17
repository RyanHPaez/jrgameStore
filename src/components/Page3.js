import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall() {
  const [bike, setBike] = React.useState('');

  const handleChange = (event) => {
    setBike(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 90 }} size="small">
      <InputLabel id="demo-select-small">Bike</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={bike}
        label="bike"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}