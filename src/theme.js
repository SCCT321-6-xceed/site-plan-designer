import { createTheme } from "@material-ui/core";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#93cb40",
            light:'#e0e9f4'
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