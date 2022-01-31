import React from 'react';
import './articleBody.css';
import Images from './images/images';
import BodyCard from './bodyCard/bodyCard';
import Grid from '@mui/material/Grid';

const ArticleBody = ({ article }) => {


    return (<div className="article-body">
            <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={5}>
                <Images  images={article.images} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={7}>
                <BodyCard article={article} />
            </Grid>
        </Grid>
        </div>);
}


export default ArticleBody;