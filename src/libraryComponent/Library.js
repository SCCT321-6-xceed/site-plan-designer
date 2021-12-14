import React from 'react'
import { Grid} from '@mui/material';
import TopLib from './TopLib';
import MainLib from './MainLib';
import LeftLib from './LeftLib';

const Library = () => {
    return (
        <div>
            <TopLib />
            <Grid container spacing={1}>
                <Grid item xs={2} sm={4} md={2}>
                    <LeftLib/>
                </Grid>
                <Grid item xs={10} sm={8} md={10}>
                    <MainLib />
                </Grid>
            </Grid>
        </div>
    )
}

export default Library