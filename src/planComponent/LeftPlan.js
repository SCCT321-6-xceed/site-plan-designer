import React from "react";
import { Container, Divider, makeStyles, Typography } from "@material-ui/core";
import LightIcon from "@mui/icons-material/Light";
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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

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

const LeftPlan = ({url, setUrl, type, setType, curItem, setCurItem}) => {
  const classes = useStyles();

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
  const [category, setCategory] = useState([]);
  const getAllCategory = () => {
    axios.get("http://localhost:3001/getCategory").then((response) => {
      const categoryList = response.data;
      setCategory(categoryList);
    });
  };

  React.useEffect(() => {
    getAllCategory();
    getAllItem();
    
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
      <Box sx={{ paddingTop: 1, paddingBottom: 2 }}>
        <Typography style={{ color: "#044474", fontWeight: "bold" }}>
          {" "} Drawing Tools
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
              <ListItemIcon>
                <LightIcon />
              </ListItemIcon>
              <ListItemText key={categories.id}>{categories.categoryName}</ListItemText>
              {index1 === selectedIndex1 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={index1 === selectedIndex1} timeout="auto" unmountOnExit> 
              <List component="div" disablePadding>
                <ListItem >
                  {/* <ImageList sx={{ width: 500, height: 450 }} > */}
                  <ImageList sx={{ width: "100%", height: 250 }} > 
                    {item.map((items) => (
                      <ImageListItem key={items.id} value={categories.id}>
                        <img 
                          src= {process.env.PUBLIC_URL + `/item/${items.image}`}
                          onDragStart={(e) => {
                            /* setting url for later use in MainPlan.js */
                            console.log("items", items);
                            setCurItem(items);
                            setUrl(e.target.src);
                            setType(items.category_id);
                          }}
                        />
                        <ImageListItemBar
                          title={items.name}
                          position="below"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </ListItem>
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </Container>
  );
};

export default LeftPlan;