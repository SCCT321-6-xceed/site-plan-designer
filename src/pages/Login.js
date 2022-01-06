import React from "react";
import "./Login.css";
import img1 from "../images/logo.png";
import Button from "@mui/material/Button";
import TextField from "@material-ui/core/TextField";
import { AccountCircle, LockRounded } from "@material-ui/icons";
import { InputAdornment } from "@mui/material";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core";
import { theme } from "../theme";
import { useState, useEffect, useContext } from "react";
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
      if(response.data.message) {
        console.log(response.data.message);
      } 
      if (!response.data.auth) {
        setLoginStatus(false);
        history("/"); 
      } else {
        localStorage.setItem("token", response.data.token);
        setLoginStatus(true);
        history("/dashboard");
      }
    });
  };

  //Check if user is already signed in, if true redirect to /dashboard
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].email);
        history("/dashboard");
      }
    });
  }, []);

  //Checks verification if user has the correct token
  const userAuthenticated = () => {
    Axios.get("http://localhost:3001/UserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) => {
      console.log(response);
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
            userAuthenticated();
          }}
        >
          Login
        </Button>
        

        <Link href="/Registration">Create an Account</Link>
      </Box>
    </div>
  );
}

export default Login;
