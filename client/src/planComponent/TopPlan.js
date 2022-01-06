import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
import { theme } from "../theme";
import { styled } from '@mui/material/styles'
import { Link } from '@mui/material';
import { Person } from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Logout } from '@mui/icons-material';
import { ListItemIcon } from '@mui/material';
import { BurstModeOutlined } from '@mui/icons-material';
import { ExpandMore } from '@mui/icons-material';
export default function ButtonAppBar() {
  
 // ava function
 const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: theme.palette.secondary.main}}>
        <Toolbar>
        <IconButton component={Link} to="/dashboard"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
           <Link href='/dashboard' underline="none" sx={{color:"white"}}>Site Plan Designer</Link> 
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            Project name/ Site 1<ExpandMore/>
          </Typography>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1, justifyContent: "center" }}>
            Dashboard
          </Typography> */}
          
          <Stack direction="row" spacing={1}>
          <Button variant='text' 
          startIcon={<BurstModeOutlined sx={{color:'white'}}/>}
          style={{
                  minHeight: "40px",
                  maxHeight: "50px",
                  fontWeight:'550'
                }}>
            <Link href='/library' style={{textDecoration: 'inherit', color: 'white'}}>Legend library</Link>
            </Button>

          </Stack>
          {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, marginLeft: 1 }}>
              <Avatar>R</Avatar>
            </IconButton> */}
            <div
            style={{marginLeft:'10px'}}><IconButton
        id="fade-button"
        aria-controls="fade-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
          <Avatar>R</Avatar>
        
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
       
        <MenuItem onClick={handleClose}><ListItemIcon ><Person/></ListItemIcon>My account</MenuItem>
        <MenuItem onClick={handleClose}><ListItemIcon><Logout/></ListItemIcon>Logout</MenuItem>
      </Menu></div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}