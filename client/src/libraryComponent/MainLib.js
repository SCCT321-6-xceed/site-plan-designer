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
import { Search } from "./SearchLegend";
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

const MainLib = () => {
  const classes = useStyles();

  const [item, setItem] = React.useState([]);
  const getAllItem = () => {
    axios.get('http://localhost:3001/getItem')
    .then ((response) => {
      console.log(response);
      const itemList = response.data;
      setItem(itemList);
    })
  };
  React.useEffect(() => {
    getAllItem();
  }, []);
    
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
            Lighting
          </Typography>
        </Container>
      </div>
      <div className={classes.searchBar} style={{marginLeft:'850px'}}><Search/></div>
      <div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {item.map((items) => (
              <Grid item key={items.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    title="Image Title"
                    image="https://5.imimg.com/data5/YI/VX/MY-56782338/jaquar-6w-led-downlight-250x250.jpg"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h6">{items.legend_name}</Typography>
                    <Typography variant="h7">Price: ${items.price}</Typography>
                    <br />
                  </CardContent>
                  <CardActions>
               <Button size='small' 
               variant='outlined' 
               startIcon={<VisibilityIcon/>}
               style={{border:'1.5px solid #044474', color:'#044474', marginRight:'8px', fontWeight:'bold'}} > View </Button>
               <Button size='small' 
               variant='outlined'
               startIcon={<EditIcon/>}
               style={{border:'1.5px solid #1a962a', color:'black', fontWeight:'bold'}}> Edit </Button>
               <Button size='small'
               variant='outlined'
               startIcon={<DeleteIcon/>}
               style={{border:'1.5px solid #d11a2a', color:'#d11a2a', fontWeight:'bold'}} > Delete </Button>
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
