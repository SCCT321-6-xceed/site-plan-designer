import React from "react";
import { Container, Divider, makeStyles, Typography } from "@material-ui/core";
import LightIcon from "@mui/icons-material/Light";
import OutletIcon from "@mui/icons-material/Outlet";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import IconList from "./IconList";
import {
  List,
  ListSubheader,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  ListItem,
} from "@mui/material";
import { Collapse, Button } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import EditIcon from "@mui/icons-material/Edit";
import ButtonGroup from "@mui/material/ButtonGroup";
import { CleaningServices } from "@mui/icons-material";
import { Box } from "@mui/system";
import { Search } from "./SearchIcon";
import { useState } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    paddingTop: theme.spacing(0.5),
    backgroundColor: theme.palette.primary.light,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: theme.palette.primary.light,
      border: "1px solid #ece7e7",
    },
  },
}));



const LeftPlan = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };



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
  return (
    <Container className={classes.container}>
      <Box sx={{ paddingTop: 1, paddingBottom: 2 }}>
        <Typography style={{ color: "#044474", fontWeight: "bold" }}>
          {" "}
          Drawing Tools
        </Typography>
        <ButtonGroup variant="contained">
          <Button
            size="medium"
            style={{ color: "#044474", backgroundColor: "#adcaee" }}
          >
            <CropSquareIcon />
          </Button>
          <Button
            size="medium"
            style={{ color: "#044474", backgroundColor: "#adcaee" }}
          >
            <EditIcon />
          </Button>
          <Button
            size="medium"
            style={{ color: "#044474", backgroundColor: "#adcaee" }}
          >
            <TextFieldsIcon />
          </Button>
          <Button
            size="medium"
            style={{ color: "#044474", backgroundColor: "#adcaee" }}
          >
            <CleaningServices />
          </Button>
        </ButtonGroup>
      </Box>

      <List
        sx={{ width: "100%", bgcolor: "background.paper", paddingTop: "10px" }}
        subheader={
          <ListSubheader
            component="div"
            style={{ color: "#044474", fontSize: "18px" }}
          >
            Icons
          </ListSubheader>
        }
      >
        <Divider />
        <div>
          <Search />
        </div>
{category.map((categories)=>(
  <div>
<ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <LightIcon />
          </ListItemIcon>
          <ListItemText key={categories.id}>{categories.categoryName}</ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          
            <ListItem >
            <IconList />
          </ListItem>
      
          
        </List>
      </Collapse>

  </div>
  
))}
        {/* light icon */}
        
        
        
      </List>
    </Container>
  );
};

export default LeftPlan;