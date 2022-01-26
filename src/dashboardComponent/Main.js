import React, { useState } from "react";
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
import { Link } from "react-router-dom";
// import { Search } from './SearchProject';
import EditIcon from "@mui/icons-material/Edit";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DeleteIcon from "@mui/icons-material/Delete";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import axios from "axios";
import UpdateModal from "./UpdateModal";
import CloseIcon from "@material-ui/icons/Close";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import { CardHeader } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const classes = useStyles();
  const [project, setProject] = useState([]);

  //Display data
  const getAllProject = () => {
    axios.get("http://localhost:3001/getProject").then((response) => {
      console.log(response);
      const projectList = response.data;
      setProject(projectList);
    });
  };
  React.useEffect(() => {
    getAllProject();
  }, []);

  const deleteProject = (projectID) => {
    axios
      .delete(`http://localhost:3001/deleteProject/${projectID}`)
      .then((response) => {
        setProject(
          project.filter((projects) => {
            return projects.projectID !== projectID;
          })
        );
      });
  };
  const history = useNavigate()
  const passProject = (projectID) => {
        setProject(projectID);
        console.log(projectID)
        history(`/plandesign/${projectID}`)
  };
  const updateProject = (projectID) => {
    setProject(projectID);
    console.log(projectID)
    history(`/dashboard/${projectID}`)
};
  
  //Update modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function closeHandler() {
    setModalIsOpen(false);
  }

  function openHandler() {
    setModalIsOpen(true);
  }
  const [getID, setID] = useState([]);
  const getprojectID = (projectID) => {
    axios
      .get("http://localhost:3001/getProjectID/${projectID}")
      .then((response) => {
        console.log(response);
        setID(response.data);
      });
  };

  //Search filter
  const [filteredData, setFilteredData] = React.useState([]);
  const [wordEntered, setWordEntered] = React.useState("");
  const FliterChange = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = project.filter((projects) => {
      return projects.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData(project);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData(project);
    setWordEntered("");
  };

  return (
    <>
      <div className={classes.container}></div>
      {/* Search bar */}
      <div className={classes.searchBar}>
        <Box className={classes.searchBox}>
          <input
            className={classes.searchInputs}
            placeholder="Enter project title..."
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
        <Container className={classes.cardGrid} maxWidth="auto">
          {filteredData.length !== 0 ? (
            <Grid container spacing={4}>
              {filteredData.map((projects) => (
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card} key={projects.id}>
                    <CardHeader title={projects.title}> </CardHeader>
                    <CardMedia
                      className={classes.cardMedia}
                      title="Image Title"
                      component="img"
                      src= {process.env.PUBLIC_URL + `/sitemap/${projects.image}`}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h7">
                        {" "}
                        Client: {projects.client}{" "}
                      </Typography>
                      <br />
                      <Typography variant="h7">
                        {" "}
                        Address: {projects.address}{" "}
                      </Typography>
                      <br />
                      <Typography variant="h7">
                        {" "}
                        Date: {projects.date}{" "}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        // component={Link}
                        // to="/plandesign"
                        onClick={(e)=> passProject(projects.projectID)}
                        size="small"
                        variant="outlined"
                        startIcon={<DesignServicesIcon />}
                        style={{
                          border: "1.5px solid #0367a6",
                          color: "#083359",
                          fontWeight: "bold",
                        }}
                      >
                       
                        Design
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<EditIcon />}
                        style={{
                          border: "1.5px solid #0367a6",
                          color: "#083359",
                          fontWeight: "bold",
                          marginLeft: "10px",
                        }}
                        onClick={(e) => {
                         updateProject(projects.projectID);
                          openHandler();
                          getprojectID();
                        }}
                      >
                        {" "}
                        Edit{" "}
                      </Button>
                      {modalIsOpen && (
                        <UpdateModal
                          onCancel={closeHandler}
                          onConfirm={closeHandler}
                        />
                      )}
                      <Button
                        component={Link}
                        to="/export"
                        size="small"
                        variant="outlined"
                        startIcon={<ExitToAppIcon />}
                        style={{
                          border: "1.5px solid #0367a6",
                          color: "#083359",
                          fontWeight: "bold",
                        }}
                      >
                        {" "}
                        Export{" "}
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        onClick={() => {
                          deleteProject(projects.projectID);
                        }}
                        style={{
                          border: "1.5px solid #d11a2a",
                          color: "#d11a2a",
                          fontWeight: "bold",
                        }}
                      >
                        {" "}
                        Delete{" "}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid container spacing={4}>
              {project.map((projects) => (
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card} key={projects.id}>
                    <CardHeader title={projects.title}> </CardHeader>
                    <Box sx={{maxHeight: "350px"}}>
                    <CardMedia
                      className={classes.cardMedia}
                      title={projects.title}
                      // image="https://www.roomsketcher.com/wp-content/uploads/2017/06/RoomSketcher-site-plan-landscape-design-garden-deck.jpg"
                            component="img"
                            src= {process.env.PUBLIC_URL + `/sitemap/${projects.image}`}
                    /></Box>
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h7">
                        {" "}
                        Client: {projects.client}{" "}
                      </Typography>
                      <br />
                      <Typography variant="h7">
                        {" "}
                        Address: {projects.address}{" "}
                      </Typography>
                      <br />
                      <Typography variant="h7">
                        {" "}
                        Date: {projects.date}{" "}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        // component={Link}
                        // to="/plandesign"
                        onClick={(e)=> passProject(projects.projectID)}
                        size="small"
                        variant="outlined"
                        startIcon={<DesignServicesIcon />}
                        style={{
                          border: "1.5px solid #0367a6",
                          color: "#083359",
                          fontWeight: "bold",
                        }}
                      >
                        {" "}
                        Design{" "}
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<EditIcon />}
                        style={{
                          border: "1.5px solid #0367a6",
                          color: "#083359",
                          fontWeight: "bold",
                          marginLeft: "10px",
                        }}
                        onClick={openHandler}
                      >
                        {" "}
                        Edit{" "}
                      </Button>
                      {modalIsOpen && (
                        <UpdateModal
                          onCancel={closeHandler}
                          onConfirm={closeHandler}
                        />
                      )}
                      <Button
                        component={Link}
                        to="/export"
                        size="small"
                        variant="outlined"
                        startIcon={<ExitToAppIcon />}
                        style={{
                          border: "1.5px solid #0367a6",
                          color: "#083359",
                          fontWeight: "bold",
                        }}
                      >
                        {" "}
                        Export{" "}
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        onClick={() => {
                          deleteProject(projects.projectID);
                        }}
                        style={{
                          border: "1.5px solid #d11a2a",
                          color: "#d11a2a",
                          fontWeight: "bold",
                        }}
                      >
                        {" "}
                        Delete{" "}
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
  );
};
export default Main;
