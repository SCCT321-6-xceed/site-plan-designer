import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    paddingTop: theme.spacing(2),
  },
}));
const MainPlan = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Box
        sx={{
          border: 1,
          borderColor: "black",
          height: "100",
          justifyContent: "center",
          marginTop: 5,
          display: "flex",
        }}
      >
        <img src="https://wcs.smartdraw.com/floor-plan/img/template-floor-plan.png?bn=15100111810" alt=""/>
      </Box>
    </Container>
  );
};

export default MainPlan;
