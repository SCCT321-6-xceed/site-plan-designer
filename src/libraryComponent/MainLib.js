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
import { theme } from "../theme";

const cards = [1, 2, 3, 4, 5, 6];
const MainLib = () => {
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
            Legend Items Library
          </Typography>
        </Container>
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
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ29-_8BhhnSgYMAxpehVq-6dO1wMbOREra9A&usqp=CAU"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h6">Legend name</Typography>
                    <Typography variant="h7">Price</Typography>
                    <br />
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained" style={{background: theme.palette.primary.main}}>
                      View
                    </Button>
                    <Button size="small" variant="contained" style={{background: theme.palette.secondary.main}}>
                      Edit
                    </Button>
                    <Button size="small" variant="contained" style={{background: "#ba181b"}}>
                      Delete
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
export default MainLib;
