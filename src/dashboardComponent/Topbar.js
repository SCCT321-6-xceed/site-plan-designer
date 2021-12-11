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
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { theme } from "../theme";
import { styled } from '@mui/material/styles'
import Upload from "../components/Upload";
import { useState } from "react";

// const Input = styled('input')({
//   display: 'none',
// });
export default function ButtonAppBar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openHandler() {
    setModalIsOpen(true);
  }

  function closeHandler() {
    setModalIsOpen(false);
  }
 
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
{/* 
          <label htmlFor='contained-button-file'>
              <Input accept='image/*' id='contained-button-file' multiple type='file'/>
              <Button 
              component='span' 
              variant='contained' size='small' 
              startIcon={<AddCircleIcon />}
              style={{
                backgroundColor: theme.palette.primary.main,
                minHeight: "40px",
                maxHeight: "50px",
              }}>New Project</Button>
            </label> */}
     <Button
                
                variant="outline"
                size="small"
                startIcon={<AddCircleIcon/>}
                onClick={openHandler}
                style={{
                  border:'3px solid white',
                  color: 'white',
                  minHeight: "40px",
                  maxHeight: "50px",
                }}
              >
                 New Project
              </Button>
              {modalIsOpen && <Upload onCancel={closeHandler} onConfirm={closeHandler} />}
           
          </Stack>
          <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, marginLeft: 1 }}>
              <Avatar>R</Avatar>
            </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
