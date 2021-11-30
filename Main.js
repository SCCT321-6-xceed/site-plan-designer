import React from 'react'
import { Avatar, Typography } from '@mui/material';
import { Grid,Stack, Box,Toolbar,Container,Link } from '@mui/material';
import { AppBar, Button, Card, CardActions,CardContent, CardMedia,CssBaseline } from '@mui/material';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import useStyles from '../styles';

const cards=[1,2,3,4,5,6,7,8,9]
 const Main = () => {
    const classes = useStyles();
    return (
        <>
        <div className ={classes.container}>
     <Container maxWidth="sm">
       <Typography
       variant='h4'
       align='center'
       color='text.primary'
       gutterBottom>
         All projects
       </Typography>
     </Container>
     </div>
     <div>
     <Container className ={classes.cardGrid} maxWidth='md'>
       <Grid container spacing={4}>
         {cards.map((card)=>(
          <Grid item key={card} xs={12} sm={6} md={4}>
           <Card className={classes.card}>
             <CardMedia className={classes.cardMedia}
             title='Image Title'
             image='https://wcs.smartdraw.com/floor-plan/img/template-floor-plan.png?bn=15100111810'/>
             <CardContent className={classes.cardContent}>
               <Typography variant='h6'>Project name</Typography>
               <Typography variant='h7'>Client</Typography><br/>
               <Typography variant='h7'>Date</Typography>
             </CardContent>
             <CardActions>
               <Button size='small'>View</Button>
               <Button size='small'>Edit</Button>
               <Button size='small'>Delete</Button>
             </CardActions>
           </Card>
            </Grid>
         ))}
         
       </Grid>
     </Container>

     </div>
          </>
    )
}
export default Main;