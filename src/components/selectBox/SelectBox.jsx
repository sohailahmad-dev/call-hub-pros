import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectBox({label = 'Select', options=['One','Two','Three'],onSelect}) {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    if(onSelect){
      onSelect(event.target.value);
    }
  };

  return (
    <FormControl sx={{ minWidth: 120, width:'100%' }} size="small">
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        label={label}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map(e=><MenuItem key={e} value={e}>{e}</MenuItem>)}
      </Select>
    </FormControl>
  );
}
