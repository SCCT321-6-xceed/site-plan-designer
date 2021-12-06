import React from 'react'
import { Grid } from '@mui/material';
import TopPlan from './planComponent/TopPlan';
import RightPlan from './planComponent/RightPlan'
import MainPlan from './planComponent/MainPlan'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    right: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  }));
const ViewPlan = () => {
    return (
        <div>
            <TopPlan />
             <Grid container spacing={1}>
                <Grid item xs={10} sm={8} md={9}>
                    <MainPlan/>
                </Grid>
                <Grid item xs={2} sm={4} md={3}>
                    <RightPlan/>
                </Grid>
            </Grid> 
        </div>
    )
}

export default ViewPlan
