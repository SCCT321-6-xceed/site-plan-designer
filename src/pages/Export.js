import React from "react";
import ExportNav from "../exportComponent/ExportNav";
import { Grid } from "@mui/material";

import MainPlan from "../planComponent/MainPlan";
import ExportRightBar from "../exportComponent/ExportRightBar";
function Export() {
  return (
    <div>
      <ExportNav />
      <Grid container spacing={1}>
        <Grid item xs={10} sm={8} md={9}>
          <MainPlan />
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <ExportRightBar />
        </Grid>
      </Grid>
      <div></div>
    </div>
  );
}

export default Export;
