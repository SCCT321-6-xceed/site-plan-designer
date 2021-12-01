import React from 'react'
import { Avatar, Typography } from '@mui/material';
import { Grid,Stack, Box,Toolbar,Container,Link } from '@mui/material';
import { AppBar, Button, Card, CardActions,CardContent, CardMedia,CssBaseline } from '@mui/material';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import Topbar from './component/Topbar';
import Main from './component/Main';
import Leftbar from './component/Leftbar';

const App = () => {
 
  return (
    <div>
       <Topbar/>
      <Grid container spacing={1}>
        <Grid item  xs={2} sm={4} md={2}>
          <Leftbar />
        </Grid>
        <Grid item  xs={10} sm={8} md={10}>
        <Main/>
        </Grid>
    
    </Grid> 
    </div>
   
  )
}
export default App;