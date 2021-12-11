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
import { Link } from 'react-router-dom';
import { theme } from "../theme";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: theme.palette.secondary.main}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Site Plan Designer
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, justifyContent: "center" }}>
            Dashboard
          </Typography>
          <Stack direction="row" spacing={1}>

            {/* <Button component={Link} to="/library" color="inherit" variant='outline' size='small'>
              Upload Legends
              </Button> */}

            <Button color="inherit" variant='outline' size='small'> Create New Project </Button>
    
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}>
              <Avatar>R</Avatar>
            </IconButton>
          </Stack>

        </Toolbar>
      </AppBar>
    </Box>
  );
}