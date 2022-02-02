import React from "react";
import img1 from "../images/logo.png";
import Button from "@mui/material/Button";
import TextField from "@material-ui/core/TextField";
import { AccountCircle, LockRounded } from "@material-ui/icons";
import { InputAdornment } from "@mui/material";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core";
import { theme } from "../theme";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  textfield: {
    margin: "normal",
    size: "small",
    variant: "outlined",
    color: "primary",
    paddingBottom: "10px",
  },
}));


function Login() {
  const [email, setEmail] = useState("null");
  const [password, setPassword] = useState("null");
  const [loginStatus, setLoginStatus] = useState(false);

  const classes = useStyles();

  //Uses react router dom v6, use this to redirect to another page
  let history = useNavigate();

  Axios.defaults.withCredentials = true;

  //Login handler
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (!response.data.auth) {
        setLoginStatus(false);
        //This gets the response error from index.js after auth error
        setLoginStatus(response.data.message);
        history("/"); 
      } else {
        // get token
        localStorage.setItem("token", response.data.token);
        setLoginStatus(true);
        // Redirect to /dashboard after login is successful
        history("/dashboard");
      }
    });
  };



  return (
    <div className="login-form">
      <Box
        height="75px"
        alignItems="center"
        display="flex"
        flexDirection="column"
        marginTop="100px"
        padding="10px"
      >
        <img src={img1} alt="" />
      </Box>
      <Box
        sx={{
          margin: "auto",
          border: 1,
          borderRadius: "10%",
          width: "25rem",
          height: "25rem",
          justifyContent: "center",
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          type="email"
          placeholder="Email"
          label="Email"
          className={classes.textfield}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextField
          type="password"
          placeholder="Password"
          label="Password"
          className={classes.textfield}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockRounded />
              </InputAdornment>
            ),
          }}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Button
          variant="contained"
          size="medium"
          style={{
            backgroundColor: theme.palette.primary.main,
            minWidth: "225px",
            minHeight: "30px",
            maxWidth: "225px",
            maxHeight: "30px",
          }}
          onClick={() => {
            login();
          }}
        >
          Login
        </Button>
        <h4>{loginStatus}</h4>
        

        <Link href="/Registration">Create an Account</Link>
      </Box>
    </div>
  );
}

export default Login;
