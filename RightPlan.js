import React from 'react'
import { Container, makeStyles } from "@material-ui/core";
import { theme } from "../theme";
<<<<<<< HEAD
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
=======
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
>>>>>>> 2dc2c881950134f3877ad7a27c54dc4067752773
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';




<<<<<<< HEAD
function renderRow(props) {
  
}(props) 
  const { index, style } = props;

  return (

    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );

=======
>>>>>>> 2dc2c881950134f3877ad7a27c54dc4067752773



const useStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
<<<<<<< HEAD
        paddingTop: theme.spacing(2),
=======
        paddingTop: theme.spacing(0.5),
>>>>>>> 2dc2c881950134f3877ad7a27c54dc4067752773
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

<<<<<<< HEAD
{/* <Box
      sx={{
        width: 420,
        height: 500,
        backgroundColor: '',
        '&:hover': {
          backgroundColor: 'primary.main',
=======
<Box
      sx={{
        width: 420,
        height: 700,
        backgroundColor: '',
        '': {
          backgroundColor: '',
>>>>>>> 2dc2c881950134f3877ad7a27c54dc4067752773
          opacity: [0.9, 0.8, 0.7],
        },
      }} 
    
<<<<<<< HEAD
      > 
      
     
</Box> */}

<Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={200}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
=======


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
>>>>>>> 2dc2c881950134f3877ad7a27c54dc4067752773






    </Container>

    


    )
}

export default RightPlan