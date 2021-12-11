import React from "react";
import { Container, Typography } from "@mui/material";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import useStyles from "../pages/styles";
import { Link } from 'react-router-dom';


const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.leftcontainer}>
      {/* <div className={classes.divItem}>
        <DashboardIcon className={classes.iconItem} />
        <Typography className={classes.textItem} component={Link} to="/dashboard" style={{textDecoration: 'inherit', color: 'inherit'}}> Dashboard </Typography>
      </div> */}
      <div className={classes.divItem}>
        <BurstModeIcon className={classes.iconItem} />
        <Typography className={classes.textItem} component={Link} to="/library" style={{textDecoration: 'inherit', color: 'inherit'}}> Legend Library </Typography>
      </div>
      <div className={classes.divItem}>
        <ImportExportIcon className={classes.iconItem} />
        <Typography className={classes.textItem} component={Link} to="/export" style={{textDecoration: 'inherit', color: 'inherit'}}> Export </Typography>
      </div>
    </Container>
  );
};
export default Leftbar;
