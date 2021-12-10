import React from "react";
import { Container, Typography, Box } from "@mui/material";
import LightIcon from "@mui/icons-material/Light";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import OutletIcon from "@mui/icons-material/Outlet";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { color, maxWidth, width } from "@mui/system";
import { makeStyles } from '@material-ui/core';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Divider } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  // leftcontainer: {
  //   paddingTop: '20px',
  //   backgroundColor: '#93cb40',
  //   height: '100%',
  // },
  // divItem: {
  //   alignItems: 'center',
  //   paddingBottom: '30px',

  // },
  list:{
    width: '100%',
    maxWidth: 360,
    height: '100%',
    backgroundColor: theme.palette.primary.light,
   },
   listButton:{
     marginTop:theme.spacing(1),
 marginBottom: theme.spacing(1),
 ':hover':{ backgroundColor:'#bcd6f4'},
   },
 listIcon:{
 color: theme.palette.secondary.main,
 },
   listText:{
     color: theme.palette.secondary.main,
     fontSize: '19px',
     fontWeight:'550'
   },
   active:{
backgroundColor:'red',

   }
}));

const LeftLib = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(true);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const classes = useStyles();
  return (
    
      <List className={classes.list}>
        <ListItemButton
          className={classes.listButton}
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
          classes={{selected: classes.active}}>
          <ListItemIcon className={classes.listIcon}>
            <LightIcon />
          </ListItemIcon>
          <ListItemText><Typography className={classes.listText}>Lighting</Typography></ListItemText>
        </ListItemButton>

        <ListItemButton
         className={classes.listButton}
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}>
          <ListItemIcon className={classes.listIcon}>
            <OutletIcon />
          </ListItemIcon>
          <ListItemText><Typography className={classes.listText}>Power Points</Typography></ListItemText>
        </ListItemButton>

        <ListItemButton
          className={classes.listButton}
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}>
          <ListItemIcon className={classes.listIcon}>
            <VideoCameraBackIcon />
          </ListItemIcon>
          <ListItemText><Typography className={classes.listText}>CCTV</Typography></ListItemText>
        </ListItemButton>

        <ListItemButton
         className={classes.listButton}
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}>
          <ListItemIcon className={classes.listIcon}>
            <NotificationsActiveIcon />
          </ListItemIcon>
          <ListItemText><Typography className={classes.listText}>Alarm</Typography></ListItemText>
        </ListItemButton>
        <Divider/>
        <ListItemButton
          className={classes.listButton}
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}>
          <ListItemIcon className={classes.listIcon}>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText><Typography className={classes.listText}>Add Category</Typography></ListItemText>
        </ListItemButton>
      </List>

    

  );
};
export default LeftLib;
