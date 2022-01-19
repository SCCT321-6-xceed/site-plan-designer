import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import RedoIcon from "@mui/icons-material/Redo";
import UndoIcon from "@mui/icons-material/Undo";
import {
  List,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import { Collapse} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import LightIcon from "@mui/icons-material/Light";
import OutletIcon from "@mui/icons-material/Outlet";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";


const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    paddingTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.light,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: theme.palette.primary.light,
      border: "1px solid #ece7e7",
    },
  },
}));

const RightPlan = ({count, count1, count2, count3, count4}) => {
  console.log("RightPlan count", count);
  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(true);
  const [open4, setOpen4] = React.useState(true);

  const handlerClick = () => {
    setOpen(!open);
  };
  const handlerClick2 = () => {
    setOpen2(!open2);
  };
  const handlerClick3 = () => {
    setOpen3(!open3);
  };
  const handlerClick4 = () => {
    setOpen4(!open4);
  };
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Box
        sx={{
          border: 1,
          borderColor: "#adcaee",
          width:'100%',
backgroundColor:'#adcaee',
         

        }}
      >
        <Stack direction='row' spacing={11}>
        <Typography variant="h6" style={{marginLeft:'12px', }}>History</Typography>
        <div><IconButton size='small' style={{color: '#044474'}}>
              <UndoIcon />
            </IconButton>
            <IconButton size='small' style={{color: '#044474'}}>
              <RedoIcon />
            </IconButton></div>
        
        </Stack>
        
      </Box>
      <List
        sx={{
          maxHeight: "30%",
          overflow: "auto",
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          // border: 1,
          borderColor: "black",
          padding: 1,
          paddingBottom:'20px'
        }}
        // subheader={
        //   <ListSubheader
        //     component="div"
        //     id="nested-list-subheader"
        //     sx={{
        //       border: 1,
        //       borderColor: "black",
        //       fontSize: "20px",
        //       fontWeight:'500',
        //       color: "black",
        //       borderRadius: 2
        //     }}
        //   >
        //     History
        //     <IconButton color="primary">
        //       <UndoIcon />
        //     </IconButton>
        //     <IconButton color="primary">
        //       <RedoIcon />
        //     </IconButton>
        //   </ListSubheader>
        // }
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
          borderColor: "#adcaee",
          marginTop: "35px",
          padding: 1,
          backgroundColor: "#adcaee",
         
        }}
      >
        <Typography variant="h6">Legend Count: {count}</Typography>
      </Box>

      <List
        sx={{ width: "100%", bgcolor: "background.paper", maxHeight: "50%",
        overflow: "auto", padding: 1}}
        
      >
        {/* light icon */}
        <ListItemButton onClick={handlerClick}>
          <ListItemIcon>
            <LightIcon />
          </ListItemIcon>
          <ListItemText>Lighting {count1}</ListItemText>
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

        <ListItemButton onClick={handlerClick2}>
          <ListItemIcon>
            <OutletIcon />
          </ListItemIcon>
          <ListItemText>Power Points {count2}</ListItemText>
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemText primary="[5] Black Circle" sx={{ borderBottom: 1 }} />
            <ListItemText
              primary="[6] Item - Led Light"
              sx={{ borderBottom: 1 }}
            />
            <ListItemText primary="[7] - Line" sx={{ borderBottom: 1 }} />
          </List>
        </Collapse>

        <ListItemButton onClick={handlerClick3}>
          <ListItemIcon>
            <VideoCameraBackIcon />
          </ListItemIcon>
          <ListItemText>CCTV {count3}</ListItemText>
          {open3 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemText primary="[8] Circle" sx={{ borderBottom: 1 }} />
            <ListItemText
              primary="[9] Item - Led Light"
              sx={{ borderBottom: 1 }}
            />
            <ListItemText primary="[10] - Line" sx={{ borderBottom: 1 }} />
          </List>
        </Collapse>

        <ListItemButton onClick={handlerClick4}>
          <ListItemIcon>
            <NotificationsActiveIcon />
          </ListItemIcon>
          <ListItemText>Alarm {count4}</ListItemText>
          {open4 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open4} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemText primary="[11] Circle" sx={{ borderBottom: 1 }} />
          </List>
        </Collapse>
      </List>
    </Container>
  );
};

export default RightPlan;
