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
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { theme } from "../theme";
import { styled } from '@mui/material/styles'

const Input = styled('input')({
  display: 'none',
});
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

          <label htmlFor='contained-button-file'>
              <Input accept='image/*' id='contained-button-file' multiple type='file'/>
              <Button 
              component='span' 
              variant='contained' size='small' 
              startIcon={<PhotoCameraIcon />}
              style={{
                backgroundColor: theme.palette.primary.main,
                minHeight: "40px",
                maxHeight: "50px",
              }}>Upload</Button>
            </label>
    
           
          </Stack>
          <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, marginLeft: 2 }}>
              <Avatar>R</Avatar>
            </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}