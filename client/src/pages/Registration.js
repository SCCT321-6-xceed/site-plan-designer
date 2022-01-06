import React from 'react';
import img1 from "../images/logo.png";
import Button from "@mui/material/Button";
import TextField from "@material-ui/core/TextField";
import { AccountCircle, LockRounded } from "@material-ui/icons";
import { InputAdornment } from "@mui/material";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";


function Registration() {
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
        alignItems="center"
        display="flex"
        flexDirection="column"
        marginTop="10px"
        padding="20px"
      >
        <TextField
          margin="normal"
          size="small"
          variant="outlined"
          color="primary"
          type="email"
          placeholder="Email"
          label="Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          margin="normal"
          size="small"
          variant="outlined"
          color="primary"
          type="password"
          placeholder="Password"
          label="Password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockRounded />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          margin="normal"
          size="small"
          variant="outlined"
          color="primary"
          type="password"
          placeholder="Confirm Password"
          label="Confirm Password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockRounded />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" size="medium">
          Create Account
        </Button>
        <Router>
          <Link component={RouterLink} to="/Login">
              Already have an account?
          </Link>
        </Router>
      </Box>
    </div>
  );
}

export default Registration
