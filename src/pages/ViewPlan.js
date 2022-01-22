import React from "react";
import { Grid } from "@mui/material";
import Navbar from "../planComponent/Navbar";
import RightPlan from "../planComponent/RightPlan";
import MainPlan from "../planComponent/MainPlan";
import { makeStyles } from "@material-ui/core";
import LeftPlan from "../planComponent/LeftPlan";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const ViewPlan = () => {
  const classes = useStyles();
  const [loginStatus, setLoginStatus] = useState(false);
  let history = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setLoginStatus(false);
      history("/");
    }
  });
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  return (
    <div>
    <Navbar />
      <DndProvider backend={HTML5Backend}>
       <Grid container spacing={1}>
          <Grid item xs={2} sm={3} md={2}>
              <LeftPlan />
          </Grid>
          <Grid item xs={8} sm={7} md={8}>
              <MainPlan 
                count={count} setCount={setCount}
                count1={count1} setCount1={setCount1}
                count2={count2} setCount2={setCount2}
                count3={count3} setCount3={setCount3}
                count4={count4} setCount4={setCount4}
              />
          </Grid>
          <Grid item xs={2} sm={2} md={2}>
              <RightPlan 
                count={count}
                count1={count1}
                count2={count2}
                count3={count3}
                count4={count4}
              />
          </Grid>
      </Grid> 
    </DndProvider>
  </div>
  );
};

export default ViewPlan;
