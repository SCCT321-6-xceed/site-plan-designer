import React from 'react'
import { Container, makeStyles, Typography } from "@material-ui/core";
import { theme } from "../theme";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import CircleIcon from "@mui/icons-material/Circle";
import { fontSize } from '@mui/system';




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
          opacity: [0.8, 0.7, 0.6],
        },
      }} 
    


      > <Button  variant="contained" color="success" size="small"> Icon </Button> 
      <br></br> <br></br> <Button variant="contained" color="success" size="small"> Lighting </Button><br></br> <br></br>
      
      <ListItem 
      style={{width:240, height:1}}>
            <ListItemButton fontSize="">
            <CircleIcon  className={classes.iconItem}/>   
            </ListItemButton>
            <CircleIcon className={classes.iconItem}/>
                      </ListItem>




      <ListItem style={{width:350, Height:4}}>
            <ListItemButton> 
              <ListItemText fontSize="" primary="Icon_name" /> <ListItemText primary="Icon_name" />
            </ListItemButton>

            

          </ListItem>


          <ListItem 
      style={{width:240, height:1}}>
            <ListItemButton>
            <CircleIcon  className={classes.iconItem}/>   
            </ListItemButton>
            <CircleIcon className={classes.iconItem}/>
                      </ListItem>




      <ListItem style={{width:350}}>
            <ListItemButton> 
              <ListItemText primary="Icon_name" /> <ListItemText primary="Icon_name" />
            </ListItemButton>

            

          </ListItem>

          <ListItem 
      style={{width:240, height:1}}>
            <ListItemButton>
            <CircleIcon  className={classes.iconItem}/>   
            </ListItemButton>
            <CircleIcon className={classes.iconItem}/>
                      </ListItem>




      <ListItem style={{width:350}}>
            <ListItemButton> 
              <ListItemText primary="Icon_name" /> <ListItemText primary="Icon_name" />
            </ListItemButton>

            

          </ListItem> 
       <Button variant="contained" color="success" size="small"> Powerpoint </Button><br></br> <br></br>

       <ListItem 
      style={{width:240, height:10}}>
            <ListItemButton>
            <CircleIcon  className={classes.iconItem}/>   
            </ListItemButton>
            <CircleIcon className={classes.iconItem}/>
                      </ListItem>




      <ListItem style={{width:350}}>
            <ListItemButton> 
              <ListItemText primary="Icon_name" /> <ListItemText primary="Icon_name" />
            </ListItemButton>

            

          </ListItem>


          <ListItem 
      style={{width:240, height:1}}>
            <ListItemButton>
            <CircleIcon  className={classes.iconItem}/>   
            </ListItemButton>
            <CircleIcon className={classes.iconItem}/>
                      </ListItem>




      <ListItem style={{width:350}}>
            <ListItemButton> 
              <ListItemText primary="Icon_name" /> <ListItemText primary="Icon_name" />
            </ListItemButton>

            

          </ListItem>

          <ListItem 
      style={{width:240, height:1}}>
            <ListItemButton>
            <CircleIcon  className={classes.iconItem}/>   
            </ListItemButton>
            <CircleIcon className={classes.iconItem}/>
                      </ListItem>




      <ListItem style={{width:350}}>
            <ListItemButton> 
              <ListItemText primary="Icon_name" /> <ListItemText primary="Icon_name" />
            </ListItemButton>

            

          </ListItem>
      
      <Button variant="contained" color="success" size="small"> Security </Button><br></br> <br></br>
      <ListItem 
      style={{width:240, height:1}}>
            <ListItemButton>
            <CircleIcon  className={classes.iconItem}/>   
            </ListItemButton>
            <CircleIcon className={classes.iconItem}/>
                      </ListItem>




      <ListItem style={{width:350}}>
            <ListItemButton> 
              <ListItemText primary="Icon_name" /> <ListItemText primary="Icon_name" />
            </ListItemButton>


            

          </ListItem>
      
          <ListItem 
      style={{width:240, height:1}}>
            <ListItemButton>
            <CircleIcon  className={classes.iconItem}/>   
            </ListItemButton>
            <CircleIcon className={classes.iconItem}/>
                      </ListItem>




      <ListItem style={{width:350}}>
            <ListItemButton> 
              <ListItemText primary="Icon_name" /> <ListItemText primary="Icon_name" />
            </ListItemButton>

            

          </ListItem>

          <ListItem 
      style={{width:240, height:1}}>
            <ListItemButton>
            <CircleIcon  className={classes.iconItem}/>   
            </ListItemButton>
            <CircleIcon className={classes.iconItem}/>
                      </ListItem>




      <ListItem style={{width:350}}>
            <ListItemButton> 
              <ListItemText primary="Icon_name" /> <ListItemText primary="Icon_name" />
            </ListItemButton>

            

          </ListItem>

      
      

</Box>






    </Container>

    


    )
}

export default RightPlan