import React from 'react'
import { Container, makeStyles, Typography } from "@material-ui/core";
import LightIcon from "@mui/icons-material/Light";
import OutletIcon from "@mui/icons-material/Outlet";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import IconList from './IconList';
import { List, ListSubheader, ListItemIcon, ListItemButton, ListItemText, ListItem } from '@mui/material';
import { Collapse, Button} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import EditIcon from "@mui/icons-material/Edit";
import ButtonGroup from "@mui/material/ButtonGroup";
const useStyles = makeStyles((theme) => ({
    container: {
        height: "100%",
        paddingTop: theme.spacing(0.5),
        backgroundColor: "#93cb40",
        position: "sticky",
        top: 0,
        [theme.breakpoints.up("sm")]: {
            backgroundColor: theme.palette.primary.main,
            border: "1px solid #ece7e7",
        },
    },

}))


const LeftPlan = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Container className={classes.container}>
             <ButtonGroup variant='contained' sx={{ display: 'flex' }}>
              <Button><CropSquareIcon /></Button>
              <Button><EditIcon /></Button>
              <Button><TextFieldsIcon /></Button>

            </ButtonGroup>
            <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                subheader={
                    <ListSubheader component='div'>
                        Icons
                    </ListSubheader>
                }
            >
                {/* light icon */}
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon><LightIcon /></ListItemIcon>
                    <ListItemText>Lighting</ListItemText>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component='div' disablePadding>
                        <ListItem><IconList /></ListItem>

                    </List>
                </Collapse>
{/* power points icon */}
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon><OutletIcon /></ListItemIcon>
                    <ListItemText>Power Points</ListItemText>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component='div' disablePadding>
                        <ListItem><IconList /></ListItem>

                    </List>
                </Collapse>
{/* cctv icon */}
<ListItemButton onClick={handleClick}>
                    <ListItemIcon><VideoCameraBackIcon /></ListItemIcon>
                    <ListItemText>CCTV</ListItemText>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component='div' disablePadding>
                        <ListItem><IconList /></ListItem>

                    </List>
                </Collapse>
                {/* alarm icon */}
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon><NotificationsActiveIcon /></ListItemIcon>
                    <ListItemText>Alarm</ListItemText>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component='div' disablePadding>
                        <ListItem><IconList /></ListItem>

                    </List>
                </Collapse>
            </List>

        </Container>

    )
}

export default LeftPlan