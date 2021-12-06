import React from 'react'
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        paddingTop: theme.spacing(2),
        backgroundColor: "#93cb40",
        position: "sticky",
        top: 0,
        [theme.breakpoints.up("sm")]: {
            backgroundColor: "white",
            backgroundColor: "#93cb40",
            border: "1px solid #ece7e7",
        },
    },

}))
const RightPlan = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>

        </Container>
    )
}

export default RightPlan
