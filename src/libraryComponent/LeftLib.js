import React from "react";
import { Container, Typography } from "@mui/material";
import LightIcon from "@mui/icons-material/Light";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import OutletIcon from "@mui/icons-material/Outlet";
import useStyles from "../pages/styles";

const LeftLib = () => {
  const classes = useStyles();
  return (
    <Container className={classes.leftcontainer}>
      <div className={classes.divItem}>
        <LightIcon className={classes.iconItem} />
        <Typography className={classes.textItem}>Lighting</Typography>
      </div>
      <div className={classes.divItem}>
        <OutletIcon className={classes.iconItem} />
        <Typography className={classes.textItem}>Power Points</Typography>
      </div>
      <div className={classes.divItem}>
        <VideoCameraBackIcon className={classes.iconItem} />
        <Typography className={classes.textItem}>CCTV</Typography>
      </div>
      <div className={classes.divItem}>
        <NotificationsActiveIcon className={classes.iconItem} />
        <Typography className={classes.textItem}>Alarm</Typography>
      </div>
    </Container>
  );
};
export default LeftLib;
