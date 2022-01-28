import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import RedoIcon from "@mui/icons-material/Redo";
import UndoIcon from "@mui/icons-material/Undo";
import {
  List,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    paddingTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.light,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: theme.palette.primary.light,
      border: "1px solid #ece7e7",
    },
  },
}));

const RightPlan = (props) => {
  const classes = useStyles();

  // On initial load, loads all items

  const [category, setCategory] = React.useState([]);
  const getAllCategory = () => {
    axios.get("http://localhost:3001/getCategory").then((response) => {
      const categoryList = response.data;
      setCategory(categoryList);
    });
  };

  React.useEffect(() => {
    getAllCategory();
  }, []);



  return (
    <Container className={classes.container}>
      <Box sx={{
        border: 1,
        borderColor: "#adcaee",
        width: '100%',
        backgroundColor: '#adcaee',
      }}
      >
        <Stack direction='row' spacing={11}>
          <Typography variant="h6" style={{ marginLeft: '12px' }}>History</Typography>
          <div style={{ width: "100%" }}>
            <IconButton size='small' style={{ color: '#044474' }}>
              <UndoIcon
                onClick={() => {
                  console.log("last item: THIS", props.images[props.images.length - 1]);
                  props.setImages((names) => names.filter((_, i) => i !== names.length - 1))
                  /* updating legend count */
                  props.setCount((item) => ({ ...item, total: (props.count.total ? props.count.total : 0) - 1 }));
                  props.setCount((item) => ({ ...item, [props.images[props.images.length - 1].type]: (props.count[props.images[props.images.length - 1].type] ? props.count[props.images[props.images.length - 1].type] : 0) - 1 }));
                }}
              />
            </IconButton>
            <IconButton size='small' style={{ color: '#044474' }}>
              <RedoIcon />
            </IconButton>
          </div>
        </Stack>
      </Box>

      <List
        sx={{
          maxHeight: "30%",
          overflow: "auto",
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          borderColor: "black",
          padding: 1,
          paddingBottom: '20px'
        }}
      >
        {[...props.images].reverse().map((image, index) => {
          return (
            <ListItemText primary={`[${props.images.length - index}] - ${image.name} (${image.x}, ${image.y})`} sx={{ borderBottom: 1 }} />
          )
        })}
      </List>

      {/* --------------------------Legend count -------------------------------*/}
      <Box
        sx={{
          border: 1,
          borderColor: "#adcaee",
          marginTop: "35px",
          padding: 1,
          backgroundColor: "#adcaee",
          width: "100%"
        }}
      >
        <Typography variant="h6">Legend Count: {props.count.total}</Typography>
      </Box>

      <List
        sx={{
          width: "100%", bgcolor: "background.paper", maxHeight: "50%",
          overflow: "auto", padding: 1
        }}
      >
        {category.map((categories) => ( /* db handling epicness starts here */
          <div>
            <ListItemButton
            >
              <ListItemText key={categories.id}>{categories.categoryName} {props.count[categories.id]}</ListItemText>
            </ListItemButton>
          </div>
        ))}
      </List>
    </Container>
  );
};

export default RightPlan;