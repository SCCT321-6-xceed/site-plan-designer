import React, {useState} from "react";
import { Typography } from "@mui/material";
import { theme } from "../theme";
import Button from "@mui/material/Button";
import useStyles from "../pages/styles";
import TextField from "@material-ui/core/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import axios from "axios";
function AddCategory(props) {

    function cancelHandler() {
        props.onCancel();
    }

    const [name, setName] = useState("");
    const addCategory = () => {
        
        axios.post("http://localhost:3001/addCategory", {
    
          name: name,
         
    
        })
          .then(res => { // then print response status
            console.warn(res);
            if (res.data.success === 1) {
              setSuccess("Create project successfully");
            }
    
          })
      }
      const [isSucces, setSuccess] = useState(null);
    const classes = useStyles();
    return (
       
<div
            style={{
                backgroundColor: "#f9f9f9",
                position: "fixed",
                top: "20vh",
                left: "calc(50% - 8rem)",
                marginTop: "-50px",
                marginLeft: "-50px",
                width: "500px",
                height: "300px",
                padding: "1rem",
                zIndex: "1",
                
            }}>
            <Stack>
                <Typography align="center" variant="h4" style={{ paddingTop: "10px", color: "black" }}>
                    New category
                </Typography>

                <Box>
                    <Typography
                        variant="body1"
                        style={{ paddingLeft: "10px", color: "black", paddingTop: '10px' }}
                    >
                        <label>Title: </label>
                        <TextField className={classes.textfield} style={{width:'450px'}} 
                        onChange={(event) => { setName(event.target.value); }}/>
                    </Typography>
                </Box>
            </Stack>

            <Box textAlign="center">
                <Button
                    size="medium"
                    variant="contained"
                    className={classes.modButton}
                    onClick={addCategory}
                    style={{ background: theme.palette.primary.main, minWidth: "150px" }}
                >
                    Save
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
                {isSucces !== null ? <h4> {isSucces} </h4> : null}
            </Box>
            </div>
     
        
       
    );
}

export default AddCategory;