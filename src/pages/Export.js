import React from "react";
import ExportNav from "../exportComponent/ExportNav";
import { Grid } from "@mui/material";
import ExportTable from "../exportComponent/ExportTable";
import MainPlan from "../planComponent/MainPlan";
import { Typography } from "@material-ui/core";

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
          <ExportTable />
        </Grid>
      </Grid>
      </div>
  );
}

export default Export;
