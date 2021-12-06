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
  const classes = useStyles();
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
        >
          <Link href="/dashboard" style={{textDecoration: 'inherit', color: 'inherit'}}>Login</Link>
        </Button>

        <Link
          href="forgot-password"
          style={{ paddingTop: "10px", paddingBottom: "10px",  }}
        >
          Forgot Password
        </Link>
        <Link href="/Registration">Create an Account</Link>
      </Box>
    </div>
  );
}

export default Login;
