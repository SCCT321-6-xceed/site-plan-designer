import { makeStyles } from '@material-ui/core';

import { deepOrange } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
    container: {
      padding: '20px 30px',
    },
    ava:{
        backgroundColor: deepOrange[500],
    },

    cardGrid:{
        padding:'20px 0px',
    },
    card:{
        height:'100%',
        display:'flex',
        flexDirection:'column',
    },
    cardMedia:{
        paddingTop:'56.25%'
    },
    cardContent:{
        flexGrow:1
    },

    /*left bar*/
    leftcontainer:{
        paddingTop: '20px',
        backgroundColor:'#93cb40',
        height:'100%',
    },
    divItem:{
        display: 'flex',
        alignItems:'center',
        paddingBottom: '30px',
        cursor: 'pointer'
    },
    iconItem:{
        marginRight:'15px'
    },
    textItem:{
        fontWeight:'700px',
        fontSize:'20px'
    },
    dashButton: {
        paddingRight: "20px", 
        paddingLeft: "20px", 
        marginRight: 10,
    }
}));
export default useStyles;