import React from 'react'
import { Container, makeStyles } from "@material-ui/core";
import { theme } from "../theme";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';







const useStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        paddingTop: theme.spacing(0.5),
        backgroundColor: "#93cb40",
        position: "sticky",
        top: 0,
        [theme.breakpoints.up("sm")]: {
            backgroundColor: theme.palette.primary.main,
            border: "1px solid #ece7e7",
        },
    },

}))
const RightPlan = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>

<Box
      sx={{
        width: 420,
        height: 700,
        backgroundColor: '',
        '': {
          backgroundColor: '',
          opacity: [0.9, 0.8, 0.7],
        },
      }} 
    


      > <Button variant="contained" color="success" size="small"> Legend Count </Button> 
      <br></br> <br></br> <Button variant="contained" color="success" size="small"> Lighting </Button><br></br> 
       <List> <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="10 Legend Item name" />
            </ListItemButton>

          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="10 Legend Item name" />
            </ListItemButton>

            </ListItem>

            <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="12 Legend Item name" />
            </ListItemButton>

          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="50 Legend Item name" />
            </ListItemButton>

          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="12 Legend Item name" /> 
            </ListItemButton>

          </ListItem>


          </List>

      <br></br><Button variant="contained" color="success" size="small" >Power Point</Button> 

      <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="10 Legend Item name" />
            </ListItemButton>

          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="02 Legend Item name" />
            </ListItemButton>

          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="10 Legend Item name" />
            </ListItemButton>

          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="12 Legend Item name" />
            </ListItemButton>

          </ListItem>


      

      
</Box>






    </Container>

    


    )
}

export default RightPlan