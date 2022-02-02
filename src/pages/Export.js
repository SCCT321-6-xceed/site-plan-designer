import React from "react";
import ExportNav from "../exportComponent/ExportNav";
import { Grid } from "@mui/material";
import ExportTable from "../exportComponent/ExportTable";
import { Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useMatch } from "react-router-dom";
import Paper from '@mui/material/Paper';

function Export() {

  const [loginStatus, setLoginStatus] = useState(false);
  let history = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setLoginStatus(false);
      history('/');
    }
  });
  const [passID, setpassID] = useState([])
  const {
    params: { projectID },
  } = useMatch('/export/:projectID');
  console.log(projectID)

  const passProject = () => {
    axios
      .get(`http://localhost:3001/passProject/${projectID}`)
      .then((response) => {
        const id = response.data;
        setpassID(id);
        console.log(id);
      });
  };
  React.useEffect(() => {
    passProject();
  }, []);
  return (
    <div>
      <ExportNav />
      <Grid container spacing={1}>

        {passID.map((passIDs) => (
          <Grid item xs={9} sm={8} md={8} key={passIDs.id}>

            <Typography
              variant='h5'
              align='center'
              style={{ paddingTop: '20px', color: '#044474' }}
            >
              {passIDs.title}
            </Typography>
            <Paper variant="outlined"
              component="img"
              title="Image Title"
              style={{paddingLeft: "25%"}}
              src={process.env.PUBLIC_URL + `/sitemap/${passIDs.image}`} />
          </Grid>
        ))}
        <Grid item xs={3} sm={4} md={4}>
          <ExportTable />
        </Grid>
      </Grid>
    </div>
  );
}

export default Export;