import React from 'react'
import { Typography } from '@mui/material';
import { Grid, Container } from '@mui/material';
import { Button, Card, CardActions,CardContent, CardMedia } from '@mui/material';
import useStyles from '../pages/styles';
import { Link } from 'react-router-dom';
import { theme } from "../theme";

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
         All Projects
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
               <Typography variant='h6'> Project name </Typography>
               <Typography variant='h7'> User </Typography><br/>
               <Typography variant='h7'> Date </Typography>
             </CardContent>
             <CardActions>
               <Button component={Link} to="/plandesign" size='small' variant='contained' className={classes.dashButton} style={{background: theme.palette.primary.main}}> View </Button>
               <Button size='small' variant='contained'className={classes.dashButton} style={{background: theme.palette.secondary.main}}> Edit </Button>
               <Button size='small'variant='contained' className={classes.dashButton} style={{background: "#d00000"}}> Delete </Button>
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