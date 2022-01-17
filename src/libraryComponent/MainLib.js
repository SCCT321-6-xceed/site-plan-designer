import React from "react";
import { Typography } from "@mui/material";
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
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import CloseIcon from "@material-ui/icons/Close";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";

const MainLib = () => {
  const classes = useStyles();


  const getAllItem = () => {
    axios.get("http://localhost:3001/getItem").then((response) => {
      console.log(response);
      const itemList = response.data;
      setItem(itemList);
    });
  };

  const deleteItem = (id) => {
    axios.delete(`http://localhost:3001/deleteItem/${id}`).then((response) => {
      setItem(
        item.filter((items) => {
          return items.id !== id;
        })
      );
    });
  };
  React.useEffect(() => {
    getAllItem();
  }, []);

  const [item, setItem] = React.useState([]);
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
    <>
      <div className={classes.container}>
        <Container maxWidth="sm"></Container>
      </div>
      {/* Search bar */}
      <div className={classes.searchBar2}>
        <Box className={classes.searchBox2} sx={{display: 'flex', justifyContent: "center"}}>
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
        {filteredData.length !== 0 ? (<Grid container spacing={4}>
            {filteredData.map((items) => (
              <Grid item key={items.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    title="Image Title"
                    image=""
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h6">{items.name}</Typography>
                    <Typography variant="h7">Price: ${items.price}</Typography>
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
          </Grid>):(<Grid container spacing={4}>
            {item.map((items) => (
              <Grid item key={items.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    title="Image Title"
                    image="https://5.imimg.com/data5/YI/VX/MY-56782338/jaquar-6w-led-downlight-250x250.jpg"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h6">{items.name}</Typography>
                    <Typography variant="h7">Price: ${items.price}</Typography>
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
          </Grid>)} 
        </Container>
      </div>
    </>
  );
};
export default MainLib;
