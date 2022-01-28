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
import AbcIcon from "@mui/icons-material/Abc";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

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
  //declare variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFName] = useState("");
  const [lastName, setLName] = useState("");
  //error states
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [firstNameError, setFNameError] = useState(false);
  const [lastNameError, setLNameError] = useState(false);

  let history = useNavigate();

  const addUser = async () => {
    try {
      let response = await Axios.post("http://localhost:3001/register", {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      }).then(() => {
        history("/");
      });
    } catch (err) {}
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      email === "" ||
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) === false ||
      password === "" ||
      firstName === "" ||
      lastName === ""
    ) {
      if (email === "") {
        setEmailError(true);
      }

      if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) === false) {
        setEmailError(true);
      }

      if (password === "") {
        setPasswordError(true);
      }
      if (firstName === "") {
        setFNameError(true);
      }
      if (lastName === "") {
        setLNameError(true);
      }
    } else {
      setEmailError(false);
      setPasswordError(false);
      setFNameError(false);
      setLNameError(false);

      addUser();
      history("/");
    }
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
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
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
            required
            error={emailError}
          />
          {emailError && (
            <span className="validation_style">Add valid email</span>
          )}
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
            onChange={(event) => {
              setFName(event.target.value);
            }}
            required
            error={firstNameError}
          />
          {firstNameError && (
            <span className="validation_style">Must not be blank</span>
          )}
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
            onChange={(event) => {
              setLName(event.target.value);
            }}
            required
            error={lastNameError}
          />
          {lastNameError && (
            <span className="validation_style">Must not be blank</span>
          )}
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
            required
            error={passwordError}
          />
          {passwordError && (
            <span className="validation_style">Must not be blank</span>
          )}

          <Button
            variant="contained"
            size="medium"
            type="submit"
            style={{
              backgroundColor: theme.palette.primary.main,
              minWidth: "225px",
              minHeight: "30px",
              maxWidth: "225px",
              maxHeight: "30px",
            }}
            onClick={handleSubmit}
          >
            Create Account
          </Button>

          <Link href="/" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            Already have an account?
          </Link>
        </Box>
      </form>
    </div>
  );
}

export default Registration;
