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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function UploadLegend(props) {
  function cancelHandler() {
    props.onCancel();
  }

  const [legend_name, setLegendName] = useState("");
  const [price, setPrice] = useState(0);
  const [isSucces, setSuccess] = useState(null);

  // upload image func
  const [imageFile, setimageFile] = useState({
    file: [],
    filepreview: null,
  });

  const saveItemImage = () => {
    const formdata = new FormData();
    formdata.append("legends", imageFile.file);

    axios
      .post("http://localhost:3001/itemupload", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        console.log("success");
      });
  };

  const handleInputChange = (event) => {
    setimageFile({
      ...imageFile,
      file: event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),
    });
  };


  const addItem = () => {
    // const formdata = new FormData();
    // formdata.append('project', imageFile.file);
    axios
      .post("http://localhost:3001/addItem", {
        legend_name: legend_name,
        price: price,
        category: categoryValue,
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

  const handleChange = (event) => {
    setcategoryValue(event.target.value);
  };

  const [category, setCategory] = useState([]);
  const [categoryValue, setcategoryValue] = useState("");
  const getAllCategory = () => {
    axios.get("http://localhost:3001/getCategory").then((response) => {
      console.log(response);
      const categoryList = response.data;
      setCategory(categoryList);
    });
  };

  React.useEffect(() => {
    getAllCategory();
  }, []);
  
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
          <FormControl
            sx={{ width: "250px", height: "50px", paddingLeft: "10px" }}
          >
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              sx={{ paddingLeft: "10px" }}
              labelId="category"
              id="category"
              value={categoryValue}
              label="category"
              onChange={handleChange}
            >
              {category.map((categories) => (
                <MenuItem key={categories.id} value={categories.id}>
                  {categories.categoryName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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
            saveItemImage();
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