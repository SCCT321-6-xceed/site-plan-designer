import React from 'react';
import { Container, ThemeProvider, Typography } from '@mui/material';
import Link from "@mui/material/Link";
import BurstModeIcon from '@mui/icons-material/BurstMode';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import useStyles from '../styles';

const Leftbar = () => {
  const classes = useStyles();
  return (

    <Container className={classes.leftcontainer}>
      <div className={classes.divItem} >
        <DashboardIcon className={classes.iconItem} />
        <Typography className={classes.textItem}
        >Dashboard</Typography>
      </div>
      <div className={classes.divItem} >
        <BurstModeIcon className={classes.iconItem} />
        <Typography className={classes.textItem}><Link href='./Library'>Legend library</Link></Typography>
      </div>
      <div className={classes.divItem} >
        <ExitToAppIcon className={classes.iconItem} />
        <Typography
          className={classes.textItem}>Export</Typography>
      </div>


    </Container>
  )
}
export default Leftbar;