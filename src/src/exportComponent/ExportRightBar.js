import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import LightIcon from "@mui/icons-material/Light";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import OutletIcon from "@mui/icons-material/Outlet";
//import useStyles from "../pages/styles";
//import { Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
//import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
//import ExpandLess from "@mui/icons-material/ExpandLess";
//import ExpandMore from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";

/*
export default function NestedList(){
    const [open, setOpen] = React.useState(true);

    const handleClick=()=>{
        setOpen(!open)
    }
}
*/

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

    //style: { width: "100%", maxWidth: 360, bgcolor: "background.paper" },
    //width: "100%",
    //maxWidth: 360,
    //bgcolor: "background.paper",
  },
}));
const style = {
  // width: "100%",
  //maxWidth: 360,
  bgcolor: "#BDC3C7 ",
};

const ExportRightBar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <List sx={style} component="nav" aria-labelledby="nested-list-subheader">
        <ListItem>Legend Count: 200</ListItem>
        <ListItem button width="100%">
          <Stack direction="row" spacing={2}>
            <div className={classes.divItem}>
              <LightIcon className={classes.iconItem} />
              <Typography className={classes.textItem}>Lighting</Typography>
            </div>
          </Stack>
        </ListItem>
        <ListItem>
          <Typography className={classes.textItem}>
            108 Led down Lights
          </Typography>
        </ListItem>
        <ListItem>
          <Typography className={classes.textItem}>
            06 Pendant lights
          </Typography>
        </ListItem>
        <ListItem>
          <Typography className={classes.textItem}>
            10 Outdoor Wall Lights
          </Typography>
        </ListItem>
        <ListItem>
          <Typography className={classes.textItem}>
            00 Internal Wall Lights
          </Typography>
        </ListItem>
        <ListItem>
          <Typography className={classes.textItem}>04 Light Sensor</Typography>
        </ListItem>
        <ListItem>
          <Typography className={classes.textItem}>06 LED Strips</Typography>
        </ListItem>
        <Divider />
        <ListItem
          button
          divider /*onClick={handleClick}{open ? <ExpandLess /> : <ExpandMore}*/
        >
          <div className={classes.divItem}>
            <OutletIcon className={classes.iconItem} />
            <Typography className={classes.textItem}>Power Points</Typography>
          </div>
        </ListItem>
        <ListItem>
          <Typography className={classes.textItem}>58 Power Points</Typography>
        </ListItem>
        <ListItem>
          <Typography className={classes.textItem}>
            02 Outdoor Power Points
          </Typography>
        </ListItem>
        <ListItem button>
          <div className={classes.divItem}>
            <VideoCameraBackIcon className={classes.iconItem} />
            <Typography className={classes.textItem}>CCTV</Typography>
          </div>
        </ListItem>
        <ListItem>
          <Typography className={classes.textItem}>04 CCTV Cameras</Typography>
        </ListItem>
        <Divider light />
        <ListItem button>
          <div className={classes.divItem}>
            <NotificationsActiveIcon className={classes.iconItem} />
            <Typography className={classes.textItem}>Alarm</Typography>
          </div>
        </ListItem>
        <ListItem>
          <Typography className={classes.textItem}>
            02 Outdoor Power Points
          </Typography>
        </ListItem>
      </List>
    </Container>
  );
};

export default ExportRightBar;
