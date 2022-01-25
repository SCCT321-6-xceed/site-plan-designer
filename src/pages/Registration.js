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
import AbcIcon from '@mui/icons-material/Abc';
import { useState } from "react";
import Axios from "axios";
// import {Field, Form, Formik } from "formik";


const useStyles = makeStyles((theme) => ({
  textfield: {
    margin: "normal",
    size: "small",
    variant: "outlined",
    color: "primary",
    paddingBottom: "15px",
  },
}));

function Registration() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFName] = useState("");
  const [lastName, setLName] = useState("");

  
  const addUser = () => {
    Axios.post("http://localhost:3001/register", {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
 
    }).then(() => {
      console.log("success");
    });
  };

  return (
    <div className="registration-form">
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
          onChange={(event) => {setEmail(event.target.value);
          }}
        />
        <TextField
          type="firstname"
          placeholder="First name"
          label="firstname"
          className={classes.textfield}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AbcIcon />
              </InputAdornment>
            ),
          }}
          onChange={(event) => {setFName(event.target.value);
          }}
        />
        <TextField
          type="lastname"
          placeholder="Last name"
          label="lastname"
          className={classes.textfield}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AbcIcon />
              </InputAdornment>
            ),
          }}
          onChange={(event) => {setLName(event.target.value);
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
          onChange={(event) => {setPassword(event.target.value);
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
          onClick={addUser}
        >
          <Link href="/" style={{textDecoration: 'inherit', color: 'inherit'}}>Create Account</Link>
        </Button>
        
        <Link href="/" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
          Already have an account?
        </Link>
      </Box>
    </div>
  );
}

export default Registration;
