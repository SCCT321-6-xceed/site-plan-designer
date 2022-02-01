import React from "react";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Divider } from "@mui/material";
import AddCategory from "../components/AddCategory";
import { useState } from "react";
import axios from "axios";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { Grid, Container } from "@mui/material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import useStyles from "../pages/styles";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@material-ui/icons/Close";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";


function NewLibrary() {
  const classes = useStyles();


  //Get Category from backend
  const [category, setCategory] = useState([]);
  const getAllCategory = () => {
    axios.get("http://localhost:3001/getCategory").then((response) => {
      const categoryList = response.data;
      setCategory(categoryList);
    });
  };


// Deletes category (Must delete all items related to category)
  const deleteCategory = (id) => {
    axios
      .delete(`http://localhost:3001/deleteCategory/${id}`)
      .then((response) => {
        setCategory(
          category.filter((categories) => {
            return categories.id !== id;
          })
        );
      });
  };

  // Active item
  const [selectedIndex, setSelectedIndex] = useState("");
  // Acquire the click value
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
React.useEffect(()=>{
  handleCategoryClick()
},[selectedIndex])

  // Clicking this will render items belonging that category 
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
  //upload item
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openHandler() {
    setModalIsOpen(true);
  }

  function closeHandler() {
    setModalIsOpen(false);
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
  // Delete item
  const deleteItem = (id) => {
    axios.delete(`http://localhost:3001/deleteItem/${id}`).then((response) => {
      setItem(
        item.filter((items) => {
          return items.id !== id;
        })
      );
    });
  };

  //Initial load, render category and all items
  React.useEffect(() => {
    getAllCategory();
    getAllItem();
  }, []);

  //Search filter
  const [filteredData, setFilteredData] = React.useState([]);
  const [wordEntered, setWordEntered] = React.useState("");
  const FliterChange = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = item.filter((items) => {
      return items.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData(item);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData(item);
    setWordEntered("");
  };
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="Left"
        alignItems="stretch"
      >
        <Grid
          item
          xs={2}
          sm={4}
          md={2}
          sx={{
            position: "fixed",
            paddingTop: "60px",
            paddingRight: "20px",
            marginRight: "20px",
            width: "100%",
            maxWidth: 300,
            zIndex: 100,

          }}
        >
          <div>
            <List
              style={{
                backgroundColor: "#e0e9f4",
              }}
            >
              {category.map((categories) => (
                <ListItemButton
                  key={categories.id}
                  style={{
                    marginTop: 1,
                    marginBottom: 0.5,
                    ":hover": { backgroundColor: "#bcd6f4" },
                  }}
                  onClick={(event) =>
                    handleListItemClick(
                      event,
                      categories.id,
                      handleCategoryClick()
                    )
                  }
                  classes={{ selected: classes.active }}
                >
                  <ListItemIcon className={classes.listIcon}>
                    <LabelImportantIcon />
                  </ListItemIcon>
                  <Link
                    className={classes.link}
                    to={`/library/${categories.id}`}
                    style={{ textDecoration: "none", color: "#044474" }}
                  >
                    <Typography
                      style={{
                        fontSize: "18px",
                        fontWeight: "550",
                        textDeco: "none",
                      }}
                    >
                      {categories.categoryName}
                    </Typography>
                  </Link>
                  <ListItemText></ListItemText>
                  <DeleteIcon
                    onClick={(event) => deleteCategory(categories.id)}
                  />
                </ListItemButton>
              ))}

              <Divider />
              <ListItemButton
                className={classes.listButton}
                onClick={openHandler}
              >
                <ListItemIcon className={classes.listIcon}>
                  <AddCircleIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontWeight: "550",
                      textDeco: "none",
                    }}
                  >
                    Add Category
                  </Typography>
                </ListItemText>
              </ListItemButton>
              {modalIsOpen && (
                <AddCategory onCancel={closeHandler} onConfirm={closeHandler} />
              )}
            </List>
          </div>
        </Grid>

        <Grid
          item
          xs={10}
          sm={8}
          md={10}
          sx={{
            paddingTop: "100px",
            direction: "column",
            alignItems: "center",
            marginLeft: "200px",
            paddingLeft: "20px",
          }}
        >
          <>
            {/* Search bar */}
            <div className={classes.searchBar2}>
              <Box
                className={classes.searchBox2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <input
                  className={classes.searchInputs}
                  placeholder="Enter Item"
                  onChange={FliterChange}
                  value={wordEntered}
                />
                <Box className={classes.searchIcon}>
                  {filteredData.length === 0 ? (
                    <SearchIcon />
                  ) : (
                    <CloseIcon onClick={clearInput} />
                  )}
                </Box>
              </Box>
            </div>
            <div>
              <Container className={classes.cardGrid} maxWidth="md">
              {/* //Dynamic items cards if user not use search filter */}
                {filteredData.length !== 0 ? (
                  <Grid container spacing={4}>
                    {filteredData.map((items) => (
                      <Grid item key={items.id} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                          <CardMedia
                            className={classes.cardMedia}
                            title={items.name}
                            component="img"
                            src= {process.env.PUBLIC_URL + `/item/${items.image}`}
                          />
                          <CardContent className={classes.cardContent}>
                            <Typography variant="h6">{items.name}</Typography>
                            <Typography variant="h7">
                              Price: ${items.price}
                            </Typography>
                            <br />
                          </CardContent>
                          <CardActions>
                            <Button
                              size="small"
                              variant="outlined"
                              startIcon={<EditIcon />}
                              style={{
                                border: "1.5px solid #1a962a",
                                color: "black",
                                fontWeight: "bold",
                              }}
                            >
                              Edit
                            </Button>
                            <Button
                              size="small"
                              variant="outlined"
                              startIcon={<DeleteIcon />}
                              style={{
                                border: "1.5px solid #d11a2a",
                                color: "#d11a2a",
                                fontWeight: "bold",
                              }}
                              onClick={() => {
                                deleteItem(items.id);
                              }}
                            >
                              Delete
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                ) : (
                  //Dynamic items cards if user not use search filter
                  <Grid container spacing={4}>
                    {item.map((items) => (
                      <Grid item key={items.id} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                          <CardMedia
                            className={classes.cardMedia}
                            title={items.name}
                            component="img"
                            src= {process.env.PUBLIC_URL + `/item/${items.image}`}
                          />
                          <CardContent className={classes.cardContent}>
                            <Typography variant="h6">{items.name}</Typography>
                            <Typography variant="h7">
                              Price: ${items.price}
                            </Typography>
                            <br />
                          </CardContent>
                          <CardActions>
                            <Button
                              size="small"
                              variant="outlined"
                              startIcon={<EditIcon />}
                              style={{
                                border: "1.5px solid #1a962a",
                                color: "black",
                                fontWeight: "bold",
                              }}
                            >
                              Edit
                            </Button>
                            <Button
                              size="small"
                              variant="outlined"
                              startIcon={<DeleteIcon />}
                              style={{
                                border: "1.5px solid #d11a2a",
                                color: "#d11a2a",
                                fontWeight: "bold",
                              }}
                              onClick={() => {
                                deleteItem(items.id);
                              }}
                            >
                              Delete
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Container>
            </div>
          </>
        </Grid>
      </Grid>
    </div>
  );
}

export default NewLibrary;
