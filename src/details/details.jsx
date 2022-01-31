import React from 'react';
import Description from './description/description';
import Features from './features/features';
import Pricing from './pricing/pricing';
import Grid from '@mui/material/Grid';

const Details = ({ article }) => {
 
 

    return (<div className="details-container">
        <Grid container spacing={2}>
            <Grid item xs={8} sm={8} md={8} lg={8}>
                <Description article={article} />
            </Grid>
        </Grid>
        
        <Grid container spacing={2} columnSpacing={7}>
            <Grid item xs={8} sm={8} md={4} lg={4}>
                <Features article={article} />
            </Grid>
            <Grid item xs={8} sm={8} md={4} lg={4}>
                <Pricing article={article} />
            </Grid>
        </Grid>
    </div>);
}

export default Details;