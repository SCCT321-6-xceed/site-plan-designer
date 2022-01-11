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
        const newFilter = legendList.filter((legendItem) => {
            return legendItem.legend_name.toLowerCase().includes(searchWord.toLowerCase());
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

    const [legendList, setLegendList] = React.useState([]);
    const searchAllLegend = () => {
        axios.get('http://localhost:3001/getItem')
            .then((response) => {
                console.log(response);
                const searchLegend = response.data;
                setLegendList(searchLegend);
            })
    };
    React.useEffect(() => {
        searchAllLegend();
    }, []);

    return (
        <>
            <Box className={classes.searchBox}>
                <input className={classes.searchInputs}
                    placeholder='Enter legend name...'
                    onChange={handleChange}
                    value={wordEntered} />
                <Box className={classes.searchIcon}>
                    {filteredData.length === 0 ? (<SearchIcon />) :
                        (<CloseIcon onClick={clearInput} />)}
                </Box>
            </Box>
            {filteredData.length !== 0 && (
                <Box className={classes.dataResult}>
                    {filteredData.map((legendItem) => (
                        <List>
                            <ListItemButton key={legendItem.id}>{legendItem.legend_name}</ListItemButton>
                        </List>

                    ))}

                </Box>
            )}
        </>


    )
}
