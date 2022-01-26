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

  const [count, setCount] = useState({});

  /* url stores img url for Konva to use. see MainPlan.js */
  const [url, setUrl] = useState('');
  const [type, setType] = useState('');

  return (
    <div>
    <Navbar />
      <DndProvider backend={HTML5Backend}>
       <Grid container spacing={1}>
          <Grid item xs={2} sm={3} md={2}>
            <LeftPlan 
              url={url} setUrl={setUrl}
              type={type} setType={setType}
            />
          </Grid>
          <Grid item xs={8} sm={7} md={8}>
            <MainPlan 
              url={url}
              type={type}
              count={count} setCount={setCount}
            />
          </Grid>
          <Grid item xs={2} sm={2} md={2}>
              <RightPlan 
                count={count}
              />
          </Grid>
      </Grid> 
    </DndProvider>
  </div>
  );
};

export default ViewPlan;
