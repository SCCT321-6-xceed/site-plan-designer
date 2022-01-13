import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { Avatar } from "@mui/material";
import Stack from "@mui/material/Stack";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { theme } from "../theme";
import { BurstModeOutlined } from "@mui/icons-material";
import Upload from "./Upload";
import { useState } from "react";
import { Link } from "@mui/material";
import { Person } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Logout } from "@mui/icons-material";
import { ListItemIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

// const Input = styled('input')({
//   display: 'none',
// });
export default function ButtonAppBar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  let history = useNavigate();

  function openHandler() {
    setModalIsOpen(true);
  }

  function closeHandler() {
    setModalIsOpen(false);
  }
  // ava function
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    Axios.post("http://localhost:3001/logout", {});
    history("/");
    localStorage.removeItem("token");
    setLoginStatus(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: theme.palette.secondary.main }}
      >
        <Toolbar>
          <IconButton
            to="/dashboard"
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
            <Button
              variant="text"
              startIcon={<BurstModeOutlined sx={{ color: "white" }} />}
              style={{
                minHeight: "40px",
                maxHeight: "50px",
                fontWeight: "550",
              }}
            >
              <Link
                href="/library"
                style={{ textDecoration: "inherit", color: "white" }}
              >
                Legend library
              </Link>
            </Button>
            
            <Button
              variant="contained"
              size="small"
              startIcon={<AddCircleIcon />}
              onClick={openHandler}
              style={{
                background: theme.palette.primary.light,
                color: theme.palette.secondary.main,
                minHeight: "40px",
                maxHeight: "50px",
                fontWeight: "550",
              }}
            >
              New Project
            </Button>
            {modalIsOpen && (
              <Upload onCancel={closeHandler} onConfirm={closeHandler} />
            )}
          </Stack>
         
          <div style={{ marginLeft: "10px" }}>
            <IconButton
              id="fade-button"
              aria-controls="fade-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar>R</Avatar>
            </IconButton>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                My account
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout onClick={logout} />
                </ListItemIcon>
                <Button onClick={logout}> Logout</Button>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}