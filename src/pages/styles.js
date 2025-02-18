import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "20px 30px",
  },
  

  cardGrid: {
    padding: "20px 0px",
  },
  card: {
    height: "100%",
    width: "md",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f2f2f2",
  },
  cardMedia: {
    paddingTop: "30px",
    paddingBottom: "10px",
    paddingLeft: "90px",
    maxHeight: "100px",
    maxWidth: "100px",
    width: "90px",
  },
  cardContent: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  cardButton: {
    marginRight: "2px",
  },
  card2: {
    height: "100%",
    width: "md",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f2f2f2",
    marginLeft: "20px",
    marginRight: "20px",
  },
  cardMedia2: {
    paddingTop: "10px",
    height: "300px",
    minHeight: "300px",
  },
  cardContent2: {
    flexGrow: 1,
  },
  
  //modal.js's size and position
  modal: {
    backgroundColor: "#EFF5FB",
    position: "fixed",
    top: "20vh",
    left: "calc(50% - 15rem)",
    marginTop: "-50px",
    marginLeft: "-50px",
    width: "600px",
    height: "auto",
    padding: "1rem",
    zIndex: "1",
    borderRadius: 16,
    border: "1px",
    borderColor: "black",
  },
  modButton: {
    paddingRight: "20px",
    paddingLeft: "20px",
    marginTop: "50px",
    marginLeft: "20px",
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
    paddingTop: "20px",
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
  imageName: {
    color: "black",
    fontSize: "15px",
    border: "1px solid #07a8ff",
    backgroundColor: "white",
    height: "27px",
    padding: "10px",
    marginLeft: "17px",
  },

  //searchField
  searchBar: {
    [theme.breakpoints.down("sm")]: {
      // marginLeft: '0px'
    },
    paddingBottom: "20px",
    display: "flex",
    justifyContent: "center",
  },
  searchBox: {
    borderRadius: 16,
    display: "flex",
    justifyContent: "center",
  },
  searchInputs: {
    backgroundColor: "#f9f9f9",
    border: 0,
    borderRadius: "2px",
    fontSize: "18px",
    padding: "15px",
    height: "30px",
    width: "300px",
    "&:focus": { outline: "none" },
  },
  searchIcon: {
    height: "60px",
    width: "35px",
    backgroundColor: "#f9f9f9",
    display: "grid",
    alignItems: "center",
  },
  dataResult: {
    borderRadius: 8,
    marginTop: "5px",
    width: "300px",
    height: "200px",
    backgroundColor: "#f9f9f9",
    // overflow: 'hidden',
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
}));
export default useStyles;
