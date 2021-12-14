import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
    return (
        <Autocomplete
        disablePortal
        id="legend-search"
        options={legend}
        popupIcon={<SearchIcon/>}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search legend item" />}
      />
    )
}
const legend=[
    {label: 'Led recessed down light', category: 'Lighting'},
    {label: 'Large Round 12V Recessed Ground Light', category: 'Lighting'},
    {label: 'Uno 270mm Light Flush Mount', category: 'Lighting'},
    {label: 'Color Switchng Flush Mount', category: 'Lighting'},
  
 
]