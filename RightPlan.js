import React from 'react'
import { Container, makeStyles } from "@material-ui/core";
import { theme } from "../theme";
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';




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




const useStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        paddingTop: theme.spacing(2),
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

{/* <Box
      sx={{
        width: 420,
        height: 500,
        backgroundColor: '',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }} 
    
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






    </Container>

    


    )
}

export default RightPlan