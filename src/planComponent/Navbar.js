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
import { theme } from "../theme";
// import { Link } from "@mui/material";
import { Link } from "react-router-dom";
import { Person } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useState } from "react";
import { Logout } from "@mui/icons-material";
import { ListItemIcon } from "@mui/material";
import { BurstModeOutlined } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

export default function ButtonAppBar() {
  const [loginStatus, setLoginStatus] = useState(false);
  let history = useNavigate();
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
            component={Link}
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Project name/ Site 1<ExpandMore />
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
                component={Link}
                to="/library"
                style={{ textDecoration: "inherit", color: "white" }}
              >
                Legend library
              </Link>
            </Button>
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
                  <Button onClick={logout}> Logout</Button>
                </ListItemIcon>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
