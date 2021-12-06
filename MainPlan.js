import React from 'react'
import { Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
        height: "100%",
        paddingTop: theme.spacing(2),
        marginLeft: theme.spacing(5),

    },

}))
const MainPlan = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <img src='https://wcs.smartdraw.com/floor-plan/img/template-floor-plan.png?bn=15100111810' />
        </Container>
    )
}

export default MainPlan
