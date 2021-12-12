import React from "react";
import { Typography } from "@mui/material";
import { theme } from "../theme";
import Button from "@mui/material/Button";
import useStyles from "../pages/styles";
import TextField from "@material-ui/core/TextField";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles'

function UploadLegend(props) {

  function cancelHandler () {
    props.onCancel();
  }

  function confirmHandler () {
    props.onConfirm();
  }

  const Input = styled('input')({
    display: 'none',
  });

  const classes = useStyles();
  return (
    <div className={classes.modal}>
      <Stack>
        <Typography align="center" variant="h4" style={{ paddingTop: "10px", color: "black" }}>
        Upload Legend Item
        </Typography>

        <div className={classes.modItem}>
        <label htmlFor='contained-button-file'>
              <Input accept='image/*' id='contained-button-file' multiple type='file'/>
          <FileUploadIcon fontSize="large" className={classes.modIcon} style={{color: "black"}}/>
          <Button component='span' color="primary" variant="outlined" size="medium" style={{color: "blue"}}>
            Upload Item
          </Button></label>
        </div>
        <Box>
          <Typography
            variant="body1"
            style={{ paddingLeft: "15px", color: "black" }}
          >
            <label>Name: </label>
            <TextField className={classes.textfield} />
            <label>Price: </label>
            <TextField className={classes.textfield} />
          </Typography>
        </Box>
      </Stack>

      <Box textAlign="center">
        <Button
          size="medium"
          variant="contained"
          className={classes.modButton}
          onClick={confirmHandler}
          style={{ background: theme.palette.primary.main, minWidth: "150px" }}
        >
          Confirm
        </Button>
        <Button
          size="medium"
          variant="contained"
          className={classes.modButton}
          onClick={cancelHandler}
          style={{ background: "#d00000" }}
        >
          Cancel
        </Button>
      </Box>
    </div>
  );
}

export default UploadLegend;