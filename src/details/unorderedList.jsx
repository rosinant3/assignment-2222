import React from 'react';

const UnorderedList = ({ keys, obj }) => {
 
    return (
            <ul className="feature-ul">
                {keys.map((key)=>{
                    return <li key={key}><span className="grey-text">{key}:</span> <span className="feature-type">{obj[key]} { key === "Minimum Order" ? obj.unit : ""} { key === "Delivery" ? "days" : ""}</span></li>
                })}
            </ul>
    );
}

export default UnorderedList;