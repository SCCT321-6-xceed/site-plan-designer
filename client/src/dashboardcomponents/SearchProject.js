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
        </>


    )
}
