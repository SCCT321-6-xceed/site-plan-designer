import React from 'react'
import { Grid } from '@mui/material';
import TopPlan from '../planComponent/TopPlan';
import RightPlan from '../planComponent/RightPlan'
import MainPlan from '../planComponent/MainPlan'
import { makeStyles } from '@material-ui/core';
import LeftPlan from '../planComponent/LeftPlan';

const useStyles = makeStyles((theme) => ({
    right: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  }));
const ViewPlan = () => {
  const classes = useStyles();
    return (
        <div>
            <TopPlan />
             <Grid container spacing={1}>
                <Grid item xs={2} sm={3} md={2}>
                    <LeftPlan/>
                </Grid>
                <Grid item xs={8} sm={7} md={8}>
                    <MainPlan/>
                </Grid>
                <Grid item xs={2} sm={2} md={2}>
                    <RightPlan/>
                </Grid>
            </Grid> 
        </div>
    )
}

export default ViewPlan