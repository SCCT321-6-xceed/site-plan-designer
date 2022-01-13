import React from "react";
import { Grid } from "@mui/material";
import Topbar from "../dashboardcomponents/Topbar";
import Main from "../dashboardcomponents/Main";
// import Leftbar from "../dashboardcomponents/Leftbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  let history = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setLoginStatus(false);
      history("/");
    }
  });

  return (
    <div>
      <Topbar />
      {/* <Grid container spacing={1}>
        <Grid item xs={2} sm={4} md={2}>
          <Leftbar />
        </Grid>
        <Grid item xs={10} sm={8} md={10}>
          <Main />
        </Grid>
      </Grid> */}
       <Main/>
    </div>
   
  );
};

export default Dashboard;
