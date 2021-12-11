import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
export const Search = () => {
    return (
        <Autocomplete
        disablePortal
        id="project-search"
        options={project}
        popupIcon={<SearchIcon/>}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search project" />}
      />
    )
}
const project=[
    {label: 'Orbit Building Pty Ltd', client: 'Vasko Krkoski'},
    {label: 'Medal Building Pty Ltd', client: ' Sierra Patterson'},
    {label: 'Deloitte Building Pty Ltd', client: 'Seith Lishon'},
    {label: 'WSU Building Pty Ltd', client: ' Kris Fantom'},
    {label: 'AMP Building Pty Ltd', client: 'Jayson Gray'},
    {label: 'Capita Center Building', client: 'Casey Holland'},
    {label: 'Sydney Office Building', client: 'Simon Koski'},
    {label: 'Suncrop Place', client: 'Vanessa Monak'},
    {label: 'Beyond Space Building Pty Ltd', client: 'Maddy Defud'},
    {label: 'Landmark Office', client: 'Karlo Miller'},
    {label: 'Shine Bridge Building Pty Ltd', client: 'John Nurdy'},
    {label: 'Ruel Center Pty Ltd', client: 'Sam Khiem'},


]