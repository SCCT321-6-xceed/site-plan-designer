import React from "react";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@material-ui/core";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Divider } from "@mui/material";
import AddCategory from "../components/AddCategory";
import { useState } from "react";
import axios from "axios";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import DeleteIcon from '@mui/icons-material/Delete';


const useStyles = makeStyles((theme) => ({
  list: {
    width: "100%",
    maxWidth: 360,
    height: "100%",
    backgroundColor: theme.palette.primary.light,
  },
  listButton: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
    ":hover": { backgroundColor: "#bcd6f4" },
  },
  listIcon: {
    color: theme.palette.secondary.main,
  },
  listText: {
    color: theme.palette.secondary.main,
    fontSize: "18px",
    fontWeight: "550",
  },
  active: {
    backgroundColor: "red",
  },
}));

const LeftLib = () => {
  const [category, setCategory] = useState([]);
  const getAllCategory = () => {
    axios.get("http://localhost:3001/getCategory").then((response) => {
      const categoryList = response.data;
      setCategory(categoryList);
    });
  };

  React.useEffect(() => {
    getAllCategory();
  }, []);

  const deleteCategory = (id) => {
    axios.delete(`http://localhost:3001/deleteCategory/${id}`).then((response) => {
      setCategory(
              category.filter((categories) => {
                return categories.id !== id;
              })
            );
    });
  };


  // //Active item
  const [selectedIndex, setSelectedIndex] = useState("");
  // Acquire the click value
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  // Sends value to backend
  const handleCategoryClick = () => {
    axios.post("http://localhost:3001/CategoryItem", {
      selectedIndex: selectedIndex,
    });
    //console log user's click
    console.log(selectedIndex);
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
      <List className={classes.list}>
        {category.map((categories) => (
          <ListItemButton
            key={categories.id}
            className={classes.listButton}
            onClick={(event) =>
              handleListItemClick(event, categories.id, handleCategoryClick())
            }
            classes={{ selected: classes.active }}
          >
            <ListItemIcon className={classes.listIcon}>
              <LabelImportantIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography className={classes.listText}>
                {categories.categoryName}
              </Typography>
            </ListItemText>
            <DeleteIcon onClick={(event) => deleteCategory(categories.id)}/>
          </ListItemButton>
          
     
        ))}

        <Divider />
        <ListItemButton className={classes.listButton} onClick={openHandler}>
          <ListItemIcon className={classes.listIcon}>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography className={classes.listText}>Add Category</Typography>
          </ListItemText>
        </ListItemButton>
        {modalIsOpen && (
          <AddCategory onCancel={closeHandler} onConfirm={closeHandler} />
        )}
      </List>
    </div>
  );
};
export default LeftLib;
