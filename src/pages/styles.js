import { makeStyles } from "@material-ui/core";
import { deepOrange } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "20px 30px",
  },
  ava: {
    backgroundColor: deepOrange[500],
  },

  cardGrid: {
    padding: "20px 0px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },

  /*left bar*/
  leftcontainer: {
    paddingTop: "20px",
    backgroundColor: "#93cb40",
    height: "100%",
  },
  divItem: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "30px",
    cursor: "pointer",
  },
  iconItem: {
    marginRight: "15px",
  },
  textItem: {
    fontWeight: "700px",
    fontSize: "20px",
  },

  //dashboard button
  dashButton: {
    paddingRight: "20px",
    paddingLeft: "20px",
    marginRight: 10,
  },
  
  //modal.js's size and position
  modal: {
    backgroundColor: "#f9f9f9",
    position: "fixed",
    top: "20vh",
    left: "calc(50% - 15rem)",
    marginTop: "-50px",
    marginLeft: "-50px",
    width: "600px",
    height: "400px",
    padding: "1rem",
    zIndex: "1",
  },
  modButton: {
    paddingRight: "20px",
    paddingLeft: "20px",
    marginTop: "50px",
    marginLeft: "50px",
    minWidth: "125px",
    minHeight: "40px",
  },
  textfield: {
    margin: "normal",
    size: "small",
    variant: "outlined",
    color: "black",
    paddingBottom: "10px",
    width: "500px",
  },

  modItem: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "20px",
    paddingTop: "30px",
    cursor: "pointer",
  },

  modIcon: {
    marginRight: "10px",
    marginLeft: "10px",
  },
  modText: {
    fontWeight: "700px",
    fontSize: "20px",
  },

}));
export default useStyles;
