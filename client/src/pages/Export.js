import React from "react";
import ExportNav from "../exportComponent/ExportNav";
import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";
import MainPlan from "../planComponent/MainPlan";
import ExportRightBar from "../exportComponent/ExportRightbar";
function Export() {
  return (
    <div>
      <ExportNav />
      <Grid container spacing={1}>
        <Grid item xs={9} sm={8} md={8}>
        <Typography
       variant='h5'
       align='center'
       style={{paddingTop:'20px', color:'#044474'}}
       >
         Project name
       </Typography>
          <MainPlan />
        </Grid>
        <Grid item xs={3} sm={4} md={4}>
          <ExportRightBar />
        </Grid>
      </Grid>
      <div></div>
    </div>
  );
}

export default Export;