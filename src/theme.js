import { createTheme } from "@material-ui/core";
import { light } from "@mui/material/styles/createPalette";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#93cb40",
            light:'#8ec936'
        },
        secondary: {
            main: "#044474"
        }
    },
    formButton: {
        backgroundColor: "#93cb40",
        color: "white",
        border: "1px solid black",
    }
})