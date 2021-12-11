import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { Avatar } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Link } from 'react-router-dom';
import { theme } from "../theme";
import { styled } from '@mui/material/styles'
import UploadLegend from "../components/UploadLegend";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from "react";

// const Input = styled('input')({
//   display: 'none',
// });
const TopLib = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openHandler() {
    setModalIsOpen(true);
  }

  function closeHandler() {
    setModalIsOpen(false);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: theme.palette.secondary.main }}>
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Site Plan Designer
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, justifyContent: "center" }}>
            Legend Library
          </Typography>
          <Stack direction="row" spacing={1}>
            {/* <label htmlFor='contained-button-file'>
              <Input accept='image/*' id='contained-button-file' multiple type='file'/>
              <Button 
              component='span' 
              variant='contained' size='small' 
              startIcon={<UploadIcon />}
              style={{
                backgroundColor: theme.palette.primary.main,
                minHeight: "40px",
                maxHeight: "50px",
              }}>Upload</Button>
            </label> */}

            <Button
              color="inherit"
              variant="outline"
              size="small"
              startIcon={<AddCircleIcon />}
              onClick={openHandler}
            >
              Add Legend
            </Button>
            {modalIsOpen && <UploadLegend onCancel={closeHandler} onConfirm={closeHandler} />}
          </Stack>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, marginLeft: 2 }}
          >
            <Avatar>R</Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopLib;