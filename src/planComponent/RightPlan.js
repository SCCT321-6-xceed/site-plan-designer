import React, { useState } from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import RedoIcon from "@mui/icons-material/Redo";
import UndoIcon from "@mui/icons-material/Undo";
import {
  List,
  ListItemIcon,
  ListItemButton,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import { Collapse} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import LightIcon from "@mui/icons-material/Light";
import OutletIcon from "@mui/icons-material/Outlet";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import axios from "axios";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    paddingTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.light,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: theme.palette.primary.light,
      border: "1px solid #ece7e7",
    },
  },
}));

const RightPlan = (props) => {
  const classes = useStyles();
  const [idx, setIdx] = useState(1);

  //handle collapse
  const [selectedIndex1, setSelectedIndex1] = React.useState("")

  const handleClick1 = index1 => {
    if (selectedIndex1 === index1) {
      setSelectedIndex1("")
    } else {
      setSelectedIndex1(index1)
    }
  }

  // On initial load, loads all items
  const [item, setItem] = React.useState([]);
  const getAllItem = () => {
    axios.get("http://localhost:3001/getItem").then((response) => {
      console.log(response);
      const itemList = response.data;
      setItem(itemList);
    });
  };
  const [category, setCategory] = React.useState([]);
  const getAllCategory = () => {
    axios.get("http://localhost:3001/getCategory").then((response) => {
      const categoryList = response.data;
      setCategory(categoryList);
    });
  };

  React.useEffect(() => {
    getAllItem();
    getAllCategory();
  }, []);

  // Active item
  const [selectedIndex, setSelectedIndex] = useState("");
  // Acquire the click value
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  React.useEffect(()=>{
    handleCategoryClick()
  },[selectedIndex])

  // Clicking this will render items belonging that category (must double click category)
  const handleCategoryClick = () => {
    axios
      .post("http://localhost:3001/CategoryItem", {
        selectedIndex: selectedIndex,
      })
      .then((response) => {
        const itemList = response.data;
        setItem(itemList);
        console.log(itemList);
      });
  };

  return (
    <Container className={classes.container}>
      <Box sx={{
          border: 1,
          borderColor: "#adcaee",
          width:'100%',
          backgroundColor:'#adcaee',
        }}
      >
        <Stack direction='row' spacing={11}>
          <Typography variant="h6" style={{marginLeft:'12px'}}>History</Typography>
          <div>
            <IconButton size='small' style={{color: '#044474'}}>
              <UndoIcon 
                onClick={() => {
                  console.log("last item", props.images[props.images.length - 1]);
                  props.setImages((names) => names.filter((_, i) => i !== names.length - 1))
                  /* updating legend count */
                  props.setCount((item)=>({...item, total: (props.count.total ? props.count.total : 0) - 1}));
                  props.setCount((item)=>({...item, [props.images[props.images.length - 1].type]: (props.count[props.images[props.images.length - 1].type] ? props.count[props.images[props.images.length - 1].type] : 0) - 1}));
                }}
              />
            </IconButton>
            <IconButton size='small' style={{color: '#044474'}}>
              <RedoIcon />
            </IconButton>
          </div>
        </Stack>
      </Box>

      <List
        sx={{
          maxHeight: "30%",
          overflow: "auto",
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          borderColor: "black",
          padding: 1,
          paddingBottom:'20px'
        }}
      >
        {[...props.images].reverse().map((image, index) => {
          return (
            <ListItemText primary={`[${props.images.length - index}] - ${image.name} at (${image.x}, ${image.y})`} sx={{ borderBottom: 1 }} />
          )
        })}
        {/* <ListItemText primary="[1] - Line" sx={{ borderBottom: 1 }} />
        <ListItemText primary="[2] Circle" sx={{ borderBottom: 1 }} />
        <ListItemText primary="[3] Item - Led Light" sx={{ borderBottom: 1 }} />
        <ListItemText primary="[4] - Red Line" sx={{ borderBottom: 1 }} />
        <ListItemText primary="[5] Black Circle" sx={{ borderBottom: 1 }} />
        <ListItemText primary="[6] Item - Led Light" sx={{ borderBottom: 1 }} />
        <ListItemText primary="[7] - Line" sx={{ borderBottom: 1 }} />
        <ListItemText primary="[8] Circle" sx={{ borderBottom: 1 }} />
        <ListItemText primary="[9] Item - Led Light" sx={{ borderBottom: 1 }} />
        <ListItemText primary="[10] - Line" sx={{ borderBottom: 1 }} />
        <ListItemText primary="[11] Circle" sx={{ borderBottom: 1 }} />
        <ListItemText primary="[12] Item - Led Light" sx={{ borderBottom: 1 }} /> */}
      </List>

{/* --------------------------Legend count -------------------------------*/}
      <Box
        sx={{
          border: 1,
          borderColor: "#adcaee",
          marginTop: "35px",
          padding: 1,
          backgroundColor: "#adcaee",
        }}
      >
        <Typography variant="h6">Legend Count: {props.count.total}</Typography>
      </Box>

      <List
        sx={{ width: "100%", bgcolor: "background.paper", maxHeight: "50%",
        overflow: "auto", padding: 1}}
      >
        {category.map((categories,index1)=>( /* db handling epicness starts here */
          <div>
            <ListItemButton onClick={(event) =>
              handleListItemClick(
                event,
                categories.id,
                handleClick1(index1),
                handleCategoryClick(),
              )}
            >
            <ListItemText key={categories.id}>{categories.categoryName} {props.count[categories.id]}</ListItemText>
            
            </ListItemButton>

            
          </div>
        ))}
      </List>
    </Container>
  );
};

export default RightPlan;