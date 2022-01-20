import React, { useState } from "react";
import { Typography } from "@mui/material";
import { theme } from "../theme";
import Button from "@mui/material/Button";
import useStyles from "../pages/styles";
import TextField from "@material-ui/core/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import axios from "axios";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function AddCategory(props) {
  function cancelHandler() {
    props.onCancel();
  }

  const [categoryName, setcategoryName] = useState("");
  const addCategory = () => {
    axios
      .post("http://localhost:3001/addCategory", {
        categoryName: categoryName,
      })
      .then((res) => {
        // then print response status
        console.log("Success");
        window.location.reload();

      });
  };

  const classes = useStyles();
  return (
    <div
      style={{
        backgroundColor: "#EAF1F9",
        position: "fixed",
        top: "20vh",
        left: "calc(50% - 8rem)",
        marginTop: "-50px",
        marginLeft: "-50px",
        width: "500px",
        height: "auto",
        padding: "1rem",
        zIndex: "1",
        border: 16
      }}
    >
      <Stack>
        <IconButton
          aria-label="close"
          onClick={cancelHandler}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.primary.main,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography
          align="center"
          variant="h4"
          style={{ paddingTop: "10px", color: "black" }}
        >
          New category
        </Typography>

        <Box>
          <Typography
            variant="body1"
            style={{ paddingLeft: "10px", color: "black", paddingTop: "10px" }}
          >
            <label>Title: </label>
            <TextField
              className={classes.textfield}
              style={{ width: "450px" }}
              onChange={(event) => {
                setcategoryName(event.target.value);
              }}
            />
          </Typography>
        </Box>
      </Stack>

      <Box textAlign="center">
        <Button
          size="medium"
          variant="contained"
          className={classes.modButton}
          onClick={() => {
            addCategory();
            cancelHandler();
          }}
          style={{ background: theme.palette.primary.main, minWidth: "150px" }}
        >
          Save
        </Button>
        <Button
          size="medium"
          variant="outlined"
          className={classes.modButton}
          onClick={cancelHandler}
          style={{ border: "1.5px solid #d11a2a",
          color: "#d11a2a" }}
        >
          Cancel
        </Button>
      </Box>
    </div>
  );
}

export default AddCategory;
