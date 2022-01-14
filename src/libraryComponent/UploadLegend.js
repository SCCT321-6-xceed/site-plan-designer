import React, { useState } from "react";
import { Typography } from "@mui/material";
import { theme } from "../theme";
import Button from "@mui/material/Button";
import useStyles from "../pages/styles";
import TextField from "@material-ui/core/TextField";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import axios from "axios";
import {
  List,
  ListSubheader,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  ListItem,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function UploadLegend(props) {
  function cancelHandler() {
    props.onCancel();
  }

  const [legend_name, setLegendName] = useState("");
  const [price, setPrice] = useState(0);

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

  const [category, setCategory] = useState([]);
  const getAllCategory = () => {
    axios.get("http://localhost:3001/getCategory").then((response) => {
      console.log(response);
      const categoryList = response.data;
      setCategory(categoryList);
    });
  };

  const [isSucces, setSuccess] = useState(null);

  const addItem = () => {
    // const formdata = new FormData();
    // formdata.append('project', imageFile.file);
    axios
      .post("http://localhost:3001/addItem", {
        legend_name: legend_name,
        price: price,
      })
      .then((res) => {
        // then print response status
        console.warn(res);
        if (res.data.success === 1) {
          setSuccess("Success");
        }
        window.location.reload();
      });
  };
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const classes = useStyles();
  return (
    <div className={classes.modal}>
      <Stack>
        <Typography
          align="center"
          variant="h4"
          style={{ paddingTop: "10px", color: "black" }}
        >
          Upload Legend Item
        </Typography>
        {isSucces !== null ? <h4> {isSucces} </h4> : null}
        {/* upload image */}
        <div className={classes.modItem}>
          <Stack spacing={2}>
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
            <div style={{ paddingLeft: "20px" }}>
              {imageFile.filepreview !== null ? (
                <img
                  style={{ maxWidth: "300px", maxHeight: "300px" }}
                  src={imageFile.filepreview}
                  alt="UploadImage"
                />
              ) : null}
            </div>
          </Stack>
        </div>
        <Box>
          <Typography
            variant="body1"
            style={{ paddingLeft: "15px", color: "black" }}
          >
            <label>Title: </label>
            <TextField
              className={classes.textfield}
              onChange={(event) => {
                setLegendName(event.target.value);
              }}
            />
          </Typography>

          {/* client info */}
          <Typography
            variant="body1"
            style={{ paddingLeft: "15px", color: "black" }}
          >
            <label>Price: </label>
            <TextField
              className={classes.textfield}
              onChange={(event) => {
                setPrice(event.target.value);
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
            addItem();
            cancelHandler();
          }}
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
