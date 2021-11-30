import { ThemeProvider, makeStyles } from '@mui/styles';
import { padding } from '@mui/system';
import { deepOrange, deepPurple } from '@mui/material/colors';
const useStyles = makeStyles((theme) => ({
    container: {
      padding: '0 30px',
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
        flexDirection:'column'
    },
    cardMedia:{
        paddingTop:'56.25%'
    },
    cardContent:{
        flexGrow:1
    },
}));
export default useStyles;