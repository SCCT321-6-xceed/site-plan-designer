import React, { useState } from "react";
import { Typography } from "@mui/material";
import { theme } from "../theme";
import Button from "@mui/material/Button";
import useStyles from "../pages/styles";
import TextField from "@material-ui/core/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import axios from "axios";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

function Upload(props) {
  // cancel function
  function cancelHandler() {
    props.onCancel();
  }

  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [address, setAddress] = useState("");
  const [selectedDate, setSelectDate] = useState("");

  const date = new Date(selectedDate).toLocaleDateString(); //convert date time string to local date
  const newdate = date.split("/").reverse().join("/"); //reverse date format to insert to mysql

  // upload image func
  const [imageFile, setimageFile] = useState({
    file: [],
    filepreview: null,
  });

  const handleInputChange = (event) => {
    setimageFile({
      ...imageFile,
      file: event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),
    });
  };

  const saveImage = () => {
    const formdata = new FormData();
    formdata.append("siteplan", imageFile.file);

    axios
      .post("http://localhost:3001/sitemapUpload", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        console.log("success");
      });
  };

  const addProject = () => {
    axios
      .post("http://localhost:3001/create", {
        title: title,
        client: client,
        address: address,
        date: newdate,
      })
      .then(() => {
        console.log("Success");
        window.location.reload();
      });
  };

  const classes = useStyles();

  return (
    <div className={classes.modal}>
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
      <Stack>
        <Typography
          align="center"
          variant="h4"
          style={{ paddingTop: "5px", color: "black" }}
        >
          Upload Site Plan
        </Typography>

        {/* upload image */}
        <div className={classes.modItem}>
          <Stack spacing={2}>
            <Stack direction={"row"}>
              <Typography
                variant="body1"
                style={{ paddingLeft: "15px", color: "black" }}
              >
                <label>Select an image</label>
                <input
                  className={classes.imageName}
                  name="upload_file"
                  type="file"
                  onChange={handleInputChange}
                />
              </Typography>
              {/* <Button onClick={saveImage}>Save</Button> */}
            </Stack>
            {/* preview image */}
            <div style={{ paddingLeft: "20px" }}>
              {imageFile.filepreview !== null ? (
                <img
                  style={{ maxWidth: "300px", maxHeight: "200px" }}
                  src={imageFile.filepreview}
                  alt="UploadImage"
                />
              ) : null}
            </div>
          </Stack>
        </div>
        <Box textAlign="auto">
          {/* title of project   */}
          <Typography
            variant="body1"
            style={{ paddingLeft: "15px", color: "black" }}
          >
            <label>Title: </label>
            <TextField
              className={classes.textfield}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </Typography>

          {/* client info */}
          <Typography
            variant="body1"
            style={{ paddingLeft: "15px", color: "black" }}
          >
            <label>Client: </label>
            <TextField
              className={classes.textfield}
              onChange={(event) => {
                setClient(event.target.value);
              }}
            />
          </Typography>

          {/* address info */}
          <Typography
            variant="body1"
            style={{ paddingLeft: "15px", color: "black" }}
          >
            <label>Address:</label>
            <TextField
              className={classes.textfield}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
          </Typography>

          {/* pick date */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Typography
              variant="body1"
              style={{ paddingLeft: "15px", color: "black" }}
            >
              <Stack direction="row" spacing={2}>
                <label>Date:</label>
                <CalendarTodayIcon fontSize="small" />
                <DatePicker
                  placeholderText="dd-MM-yyyy"
                  label="Date"
                  selected={selectedDate}
                  onChange={(date) => setSelectDate(date)}
                  dateFormat="dd/MM/y"
                  minDate={new Date()}
                  showYearDropdown
                />
              </Stack>
            </Typography>
          </LocalizationProvider>
        </Box>
      </Stack>
      {/* {isSucces !== null ? <h6> {isSucces} </h6> : null} */}
      {/* action button */}
      <Box textAlign="center">
        {/* confirm button */}
        <Button
          size="medium"
          variant="contained"
          className={classes.modButton}
          onClick={() => {
            addProject();
            saveImage();
            cancelHandler();
          }}
          style={{ background: theme.palette.primary.main }}
        >
          Confirm
        </Button>
        {/* cancel button */}
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

export default Upload;
