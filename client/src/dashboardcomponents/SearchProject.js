import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import useStyles from '../pages/styles';
import CloseIcon from "@material-ui/icons/Close";
import { Box } from '@mui/system';
import { List, ListItemButton } from '@mui/material';

export const Search = () => {
    const classes = useStyles();
    
    const [filteredData, setFilteredData] = React.useState([]);
    const [wordEntered, setWordEntered] = React.useState("");
    const handleChange = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = projectList.filter((projectItem) => {
          return projectItem.title.toLowerCase().includes(searchWord.toLowerCase());
        });
    
        if (searchWord === "") {
          setFilteredData([]);
        } else {
          setFilteredData(newFilter);
        }
      };
    
      const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
      };
    const [projectList, setProjectList] = React.useState([]);
    const searchAllProject = () => {
        axios.get('http://localhost:3001/searchProject')
            .then((response) => {
                console.log(response);
                const searchProject = response.data;
                setProjectList(searchProject);
            })
    };
    React.useEffect(() => {
        searchAllProject();
    }, []);

    return (
        <>
            <Box className={classes.searchBox}>
                <input className={classes.searchInputs}
                    placeholder='Enter project title...'
                    onChange={handleChange}
                    value={wordEntered} />
                <Box className={classes.searchIcon}>
                    {filteredData.length === 0 ? (<SearchIcon/>): 
                    (<CloseIcon onClick={clearInput}/>)}
                    </Box>
            </Box>
{filteredData.length !== 0 && (
            <Box className={classes.dataResult}>
                {filteredData.map((projectItem) => (
                    <List>
                        <ListItemButton key={projectItem.id}>{projectItem.title}</ListItemButton>
                    </List>

                ))}

            </Box>
)}
            {/* <Autocomplete
        disablePortal
        id="project-search"
        options={projectList}
        popupIcon={<SearchIcon/>}
        sx={{ width: 400 }}
        renderInput={(params) => <TextField {...params} label="Search project" />}
      />
        */}
        </>


    )
}
// const project=[
//     {label: 'Orbit Building Pty Ltd', client: 'Vasko Krkoski'},
//     {label: 'Medal Building Pty Ltd', client: ' Sierra Patterson'},
//     {label: 'Deloitte Building Pty Ltd', client: 'Seith Lishon'},
//     {label: 'WSU Building Pty Ltd', client: ' Kris Fantom'},
//     {label: 'AMP Building Pty Ltd', client: 'Jayson Gray'},
//     {label: 'Capita Center Building', client: 'Casey Holland'},
//     {label: 'Sydney Office Building', client: 'Simon Koski'},
//     {label: 'Suncrop Place', client: 'Vanessa Monak'},
//     {label: 'Beyond Space Building Pty Ltd', client: 'Maddy Defud'},
//     {label: 'Landmark Office', client: 'Karlo Miller'},
//     {label: 'Shine Bridge Building Pty Ltd', client: 'John Nurdy'},
//     {label: 'Ruel Center Pty Ltd', client: 'Sam Khiem'},


// ]
