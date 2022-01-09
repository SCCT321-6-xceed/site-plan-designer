import React, {useState} from 'react'
import { List, Typography } from '@mui/material';
import { Grid, Container } from '@mui/material';
import { Button, Card, CardActions,CardContent, CardMedia } from '@mui/material';
import useStyles from '../pages/styles';
import { Link } from 'react-router-dom';
import { Search } from './SearchProject';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import axios from 'axios';
import { ListItem, Paper, ListItemText } from '@mui/material';

// export default function Main (){
//   const [project, setProject] = useState([]);
  

//   const getAllProject = () => {
//     axios.get('http://localhost:3001/getProject')
//     .then ((response) => {
//       console.log(response);
//       const projectList = response.data;
//       setProject(projectList);
//     })
//   };

//   React.useEffect(() => {
//     getAllProject();
//   }, []);
//   return(
//     <div>
//       <Paper>
//         {project.map((projects)=>(
//           <List key={projects.id}>
//             <ListItem>
//               <ListItemText primary={projects.title}
//               secondary={project.client}></ListItemText>
//             </ListItem>

//           </List>
//         ))}
//       </Paper>
//     </div>
//   )
// }



const cards=[1]
 const Main = () => {
    const classes = useStyles();
    const [project, setProject] = useState([])
    React.useEffect(()=>{
      axios.get(`http://localhost:3001/getProject`)
        .then(response => {
          setProject (response.data)
        })
    },[])
    
    return (
      <>
      <div className ={classes.container}>
   <Container maxWidth="sm">
     <Typography
     variant='h4'
     align='center'
     color='text.primary'
     gutterBottom>
       Dashboard
     </Typography>
   </Container>
   </div>
   <div className={classes.searchBar}><Search/></div>
   <div>
   <Container className ={classes.cardGrid} maxWidth='auto'>
     <Grid container spacing={4}>
       {cards.map((card)=>(
        <Grid item key={card} xs={12} sm={6} md={4}>
          
          <Card className={classes.card}>
           <CardMedia className={classes.cardMedia}
           title='Image Title'
           image='https://www.roomsketcher.com/wp-content/uploads/2017/06/RoomSketcher-site-plan-landscape-design-garden-deck.jpg'/>
           <CardContent className={classes.cardContent}>
             <Typography variant='h6'> Project name:  </Typography>
             <Typography variant='h7'> Client: </Typography><br/>
             <Typography variant='h7'> Date: </Typography>
           </CardContent>
           <CardActions>
             
             <Button 
             component={Link} to="/plandesign"
             size='small' 
             variant='outlined'
             startIcon={<EditIcon/>}
             style={{border:'1.5px solid #0367a6', color:'#083359', fontWeight:'bold'}}> Design </Button>
             <Button 
             component={Link} to="/plandesign"
             size='small' 
             variant='outlined'
             startIcon={<EditIcon/>}
             style={{border:'1.5px solid #0367a6', color:'#083359',  fontWeight:'bold'}}> Edit </Button>
             <Button 
             component={Link} to="/export"
             size='small' 
             variant='outlined'
             startIcon={<ExitToAppIcon/>}
             style={{border:'1.5px solid #0367a6', color:'#083359', fontWeight:'bold'}}> Export </Button>
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
  )
}
export default Main;