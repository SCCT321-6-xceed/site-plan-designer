import React,{useState} from "react";
import { Typography } from "@mui/material";
import { theme } from "../theme";
import Button from "@mui/material/Button";
import useStyles from "../pages/styles";
import TextField from "@material-ui/core/TextField";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import axios from "axios";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

function UploadLegend(props) {

  function cancelHandler () {
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

  }


  const addItem = () => {
    // const formdata = new FormData();
    // formdata.append('project', imageFile.file);

    axios.post("http://localhost:3001/addItem", {

      legend_name: legend_name,
      price: price,

    })
      .then(() => {
        console.log('Success')
      })
  }

  const classes = useStyles();
  return (
    <div className={classes.modal}>
       <IconButton
        aria-label="close"
        onClick={cancelHandler}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.primary.main,
        }}
      >
        <CloseIcon />
      </IconButton>
      <Stack>
        <Typography align="center" variant="h4" style={{ paddingTop: "10px", color: "black" }}>
          Upload Legend Item
        </Typography>
        
        {/* upload image */}
        <div className={classes.modItem}>
          <Stack spacing={2}>
            <Typography
              variant="body1"
              style={{ paddingLeft: "15px", color: "black" }}>
              <label>Select an image</label>
              <input className={classes.imageName} name="upload_file" type='file' onChange={handleInputChange} />
            </Typography>
            <div style={{ paddingLeft: "20px" }}>
              {imageFile.filepreview !== null ?
                <img
                  style={{ maxWidth: '300px', maxHeight: '300px' }}
                  src={imageFile.filepreview} alt="UploadImage" />
                : null}
            </div>
          </Stack>

        </div>
            
        <Box>
        <Typography
            variant="body1"
            style={{ paddingLeft: "15px", color: "black" }}
          >
            <label>Title: </label>
            <TextField className={classes.textfield}
              onChange={(event) => { setLegendName(event.target.value); }} />
          </Typography>

          {/* client info */}
          <Typography
            variant="body1"
            style={{ paddingLeft: "15px", color: "black" }}
          >
            <label>Price: </label>
            <TextField className={classes.textfield}
              onChange={(event) => { setPrice(event.target.value); }} />
          </Typography>
        </Box>
      </Stack>

      <Box textAlign="center">
        <Button
          size="medium"
          variant="contained"
          className={classes.modButton}
          onClick={() =>{
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