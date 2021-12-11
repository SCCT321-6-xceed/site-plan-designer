import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import { Avatar, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import CropSquareIcon from '@mui/icons-material/CropSquare';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { theme } from "../theme";

const Navbar = () => {
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
          <Stack direction="row" spacing={1}>
            {/* <ButtonGroup variant='contained' sx={{ display: 'flex' }}>
              <Button><CropSquareIcon /></Button>
              <Button><EditIcon /></Button>
              <Button><TextFieldsIcon /></Button>

            </ButtonGroup> */}

          </Stack>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, justifyContent: "center" }}>Project name</Typography>
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

export default Navbar;
