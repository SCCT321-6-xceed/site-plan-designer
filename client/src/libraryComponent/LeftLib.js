import React from "react";
import { Typography } from "@mui/material";
// import LightIcon from "@mui/icons-material/Light";
// import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
// import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
// import OutletIcon from "@mui/icons-material/Outlet";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@material-ui/core';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Divider } from "@mui/material";
import AddCategory from "../components/AddCategory";
import { useState } from "react";
import axios from "axios"
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

const useStyles = makeStyles((theme) => ({

  list: {
    width: '100%',
    maxWidth: 360,
    height: '100%',
    backgroundColor: theme.palette.primary.light,
  },
  listButton: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
    ':hover': { backgroundColor: '#bcd6f4' },
  },
  listIcon: {
    color: theme.palette.secondary.main,
  },
  listText: {
    color: theme.palette.secondary.main,
    fontSize: '18px',
    fontWeight: '550'
  },
  active: {
    backgroundColor: 'red',

  }
}));



const LeftLib = () => {
  const [category, setCategory] = useState([])
  const getAllCategory = () => {
    axios.get('http://localhost:3001/getCategory')
    .then ((response) => {
      console.log(response);
      const categoryList = response.data;
      setCategory(categoryList);
    })
  };

  React.useEffect(() => {
    getAllCategory();
  }, []);
  //Active item
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  //upload item
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openHandler() {
    setModalIsOpen(true);
  }

  function closeHandler() {
    setModalIsOpen(false);
  }

  const classes = useStyles();
  return (
    <div>
<List className={classes.list} > 

{category.map((categories)=>(
  
    <ListItemButton key={categories.id}
        className={classes.listButton}
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0)}
        classes={{ selected: classes.active }}>
        <ListItemIcon className={classes.listIcon}>
          <LabelImportantIcon />
        </ListItemIcon>
        <ListItemText><Typography className={classes.listText}>{categories.name}</Typography></ListItemText>
      </ListItemButton>
      ))}
      
  <Divider/>
  <ListItemButton
         className={classes.listButton}
         onClick={openHandler}>
         <ListItemIcon className={classes.listIcon}>
          <AddCircleIcon />
          </ListItemIcon>
         <ListItemText><Typography className={classes.listText}>Add Category</Typography></ListItemText>

       </ListItemButton>
        {modalIsOpen && <AddCategory onCancel={closeHandler} onConfirm={closeHandler} />}
       </List>
     
    </div>
   

  );
};
export default LeftLib;
