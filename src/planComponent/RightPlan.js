import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import RedoIcon from "@mui/icons-material/Redo";
import UndoIcon from "@mui/icons-material/Undo";
import {
  List,
  ListSubheader,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  ListItem,
} from "@mui/material";
import { Collapse, Button } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import IconList from "./IconList";
import LightIcon from "@mui/icons-material/Light";
import OutletIcon from "@mui/icons-material/Outlet";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import EditIcon from "@mui/icons-material/Edit";
import ButtonGroup from "@mui/material/ButtonGroup";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    paddingTop: theme.spacing(2),
    backgroundColor: "#93cb40",
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: theme.palette.primary.main,
      border: "1px solid #ece7e7",
    },
  },
}));

const RightPlan = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <List
        sx={{
          maxHeight: "30%",
          overflow: "auto",
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          border: 1,
          borderColor: "black",
          padding: 1,
        }}
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{
              border: 1,
              borderColor: "black",
              fontSize: "25px",
              color: "black",
            }}
          >
            History
            <IconButton color="primary">
              <UndoIcon />
            </IconButton>
            <IconButton color="primary">
              <RedoIcon />
            </IconButton>
          </ListSubheader>
        }
      >
        <ListItemText primary="[1] - Line" sx={{ borderBottom: 1 }} />
        <ListItemText primary="[2] Circle" sx={{ borderBottom: 1 }} />
        <ListItemText primary="[3] Item - Led Light" sx={{ borderBottom: 1 }} />
        <ListItemText primary="[4] - Red Line" sx={{ borderBottom: 1 }} />
        <ListItemText primary="[5] Black Circle" sx={{ borderBottom: 1 }} />
        <ListItemText primary="[6] Item - Led Light" sx={{ borderBottom: 1 }} />
        <ListItemText primary="[7] - Line" sx={{ borderBottom: 1 }} />
        <ListItemText primary="[8] Circle" sx={{ borderBottom: 1 }} />
        <ListItemText primary="[9] Item - Led Light" sx={{ borderBottom: 1 }} />
        <ListItemText primary="[10] - Line" sx={{ borderBottom: 1 }} />
        <ListItemText primary="[11] Circle" sx={{ borderBottom: 1 }} />
        <ListItemText primary="[12] Item - Led Light" sx={{ borderBottom: 1 }} />
      </List>

      <Box
        sx={{
          border: 1,
          borderColor: "black",
          marginTop: "50px",
          padding: 1,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h5">Legend Count: 11</Typography>
      </Box>

      <List
        sx={{ width: "100%", bgcolor: "background.paper", marginTop: "10px", maxHeight: "50%",
        overflow: "auto", padding: 1, }}
      >
        {/* light icon */}
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <LightIcon />
          </ListItemIcon>
          <ListItemText>Lighting</ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemText primary="[1] - Line" sx={{ borderBottom: 1 }} />
            <ListItemText
              primary="[3] Item - Led Light"
              sx={{ borderBottom: 1 }}
            />
            <ListItemText primary="[4] - Red Line" sx={{ borderBottom: 1 }} />
          </List>
        </Collapse>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <OutletIcon />
          </ListItemIcon>
          <ListItemText>Power Points</ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemText primary="[5] Black Circle" sx={{ borderBottom: 1 }} />
            <ListItemText
              primary="[6] Item - Led Light"
              sx={{ borderBottom: 1 }}
            />
            <ListItemText primary="[7] - Line" sx={{ borderBottom: 1 }} />
          </List>
        </Collapse>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <VideoCameraBackIcon />
          </ListItemIcon>
          <ListItemText>CCTV</ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemText primary="[8] Circle" sx={{ borderBottom: 1 }} />
            <ListItemText
              primary="[9] Item - Led Light"
              sx={{ borderBottom: 1 }}
            />
            <ListItemText primary="[10] - Line" sx={{ borderBottom: 1 }} />
          </List>
        </Collapse>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <NotificationsActiveIcon />
          </ListItemIcon>
          <ListItemText>Alarm</ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemText primary="[11] Circle" sx={{ borderBottom: 1 }} />
          </List>
        </Collapse>
      </List>
    </Container>
  );
};

export default RightPlan;
