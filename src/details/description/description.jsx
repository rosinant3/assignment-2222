import React from 'react';
import "../details.css";

const Description = ({ article }) => {
    
    return (<div className="descritpion-container" >
        <div className="title">Description</div>
        <div>{article.description_long}</div>
    </div>);
}

export default Description;