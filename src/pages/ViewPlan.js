import React from "react";
import { Grid } from "@mui/material";
import Navbar from "../planComponent/Navbar";
import RightPlan from "../planComponent/RightPlan";
import MainPlan from "../planComponent/MainPlan";
import LeftPlan from "../planComponent/LeftPlan";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';



const ViewPlan = () => {
 
  const [loginStatus, setLoginStatus] = useState(false);
  let history = useNavigate();

  const [innerWidth, setInnerWidth] = useState();
  const [innerHeight, setInnerHeight] = useState();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setLoginStatus(false);
      history("/");
    }
    setInnerWidth(0.65 * window.innerWidth);
    setInnerHeight(window.innerHeight);
  });

  const [count, setCount] = useState({});

  /* url stores img url for Konva to use. see MainPlan.js */
  const [url, setUrl] = useState('');
  const [type, setType] = useState('');
  const [curItem, setCurItem] = useState();
  const [images, setImages] = React.useState([]); 
  const [demo, setDemo] = useState(0);

  return (
    <div>
    <Navbar />
      <DndProvider backend={HTML5Backend}>
       <Grid container spacing={1}>
          <Grid item xs={2}>
            <LeftPlan 
              url={url} setUrl={setUrl}
              type={type} setType={setType}
              curItem={curItem} setCurItem={setCurItem}
            />
          </Grid>
          <Grid item xs={8} sm={7} md={8}>
            <MainPlan 
              url={url}
              type={type}
              count={count} setCount={setCount}
              curItem={curItem}
              images={images} setImages={setImages}
              demo={demo} setDemo={setDemo}
              innerWidth={innerWidth} innerHeight={innerHeight}
            />
          </Grid>
          <Grid item xs={2}>
              <RightPlan 
                count={count} setCount = {setCount}
                images={images} setImages={setImages}
                demo={demo} setDemo={setDemo}
              />
          </Grid>
      </Grid> 
    </DndProvider>
  </div>
  );
};

export default ViewPlan;