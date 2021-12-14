import React from "react";
import { Typography } from "@mui/material";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { makeStyles } from '@material-ui/core';
import { theme } from "../theme";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
const useStyles = makeStyles((theme) => ({
  
  list: {
    width: '100%',
    maxWidth: 360,
    height: '100%',
    backgroundColor: theme.palette.primary.light,
  },
  listButton: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
':hover':{ backgroundColor:'#bcd6f4'},
  },
  listIcon: {
    color: theme.palette.secondary.main,
  },
  listText: {
    color: theme.palette.secondary.main,
    fontSize: '19px',
    fontWeight: '550'
  }
}));

const Leftbar = () => {

  const classes = useStyles();
  return (

    <List className={classes.list}>

      <ListItemButton  className={classes.listButton} component={Link} to='/library'>
        <ListItemIcon className={classes.listIcon}>
          <BurstModeIcon />
        </ListItemIcon>
        <ListItemText><Typography className={classes.listText}>Legend library</Typography></ListItemText>
      </ListItemButton>

      {/* <ListItemButton  component={Link} to='/export'>
        <ListItemIcon className={classes.listIcon}>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText><Typography className={classes.listText}>Export</Typography></ListItemText>
      </ListItemButton> */}
    </List>



  );
};
export default Leftbar;
