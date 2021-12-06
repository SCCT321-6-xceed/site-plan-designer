import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Avatar, Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const TopPlan = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        SitePlan Design </Typography>
                    <div>
                        <Typography>Project name</Typography>
                    </div>

                    <Stack direction="row" spacing={1}>
                        <Box sx={{ '& button': { m: 1.5 } }}>

                            <div>
                                <Button variant='contained'><EditIcon />Edit</Button>
                                <Button variant='contained'><ExitToAppIcon />Export</Button>
                            </div>
                        </Box>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}>
                            <Avatar>R</Avatar>
                        </IconButton>
                    </Stack>

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TopPlan
