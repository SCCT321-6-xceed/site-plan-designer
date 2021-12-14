import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import LightIcon from "@mui/icons-material/Light";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import OutletIcon from "@mui/icons-material/Outlet";
import { ListItemIcon, Typography } from "@mui/material";
import { ListItemText } from "@material-ui/core";

function LegendCount() {
  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItemIcon>
          <LightIcon />
          <ListItemText primary="Lighting"></ListItemText>
          <Typography>This is a test message</Typography>
        </ListItemIcon>
      </List>
    </div>
  );
}

export default LegendCount;