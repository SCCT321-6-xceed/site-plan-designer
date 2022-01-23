import React, { useState } from 'react'
import { Grid } from '@mui/material';
import Navbar from '../planComponent/Navbar';
import RightPlan from '../planComponent/RightPlan'
import MainPlan from '../planComponent/MainPlan'
import { makeStyles } from '@material-ui/core';
import LeftPlan from '../planComponent/LeftPlan';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
  
const ViewPlan = (props) => {
  const classes = useStyles();
  /* count stores total legend count, count 1-4 store individual legend counts. will modify and removing hardcoding now*/
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

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
    )
}

export default ViewPlan
