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
import { Link } from "react-router-dom";
import { Search } from "../components/SearchProject";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Main = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            All Projects
          </Typography>
        </Container>
      </div>
      <div className={classes.searchBar}>
        <Search />
      </div>
      <div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    title="Image Title"
                    image="https://wcs.smartdraw.com/floor-plan/img/template-floor-plan.png?bn=15100111810"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h6"> Project name </Typography>
                    <Typography variant="h7"> User </Typography>
                    <br />
                    <Typography variant="h7"> Date </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      component={Link}
                      to="/plandesign"
                      size="small"
                      variant="outlined"
                      startIcon={<VisibilityIcon />}
                      style={{
                        border: "1.5px solid #044474",
                        color: "#044474",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      View{" "}
                    </Button>
                    <Button
                      component={Link}
                      to="/plandesign"
                      size="small"
                      variant="outlined"
                      startIcon={<EditIcon />}
                      style={{
                        border: "1.5px solid #1a962a",
                        color: "black",
                        marginRight: "5px",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      Edit{" "}
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
                    >
                      {" "}
                      Delete{" "}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};
export default Main;
