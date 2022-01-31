import React from 'react';
import "../details.css";
import UnorderedList from '../unorderedList';
import AttachmentSVG from '../../svgs/attachmentSVG';

const Pricing = ({ article }) => {
 
    const keys = [ 'Minimum Order', 'Delivery' ];
    const obj = {
        'Minimum Order': article.minimum_order_quantity,
        'Delivery': article.delivery_time,
        'unit': article.unit
    };
    const priceKeys = Object.keys(article.price_breaks);

    return (<div className="details-item-container pricing-margin">
        <div className="title-container">
            <div className="title">Pricing & Shipping</div>
        </div>
        <div className="pricing-flex">
            <div>
                <div className="grey-title">Features</div>
                <UnorderedList keys={keys} obj={obj} />
            </div>
            <div className="price-break-container">
                <div className="grey-title">Price breaks</div>
                {priceKeys.map((key, index)=>{

                    return <div style={{ borderBottom: priceKeys.length - 1 === index ? "1px lightgrey solid" : ""}} className="price-break-column" key={key}>
                        <span className="feature-type">ex {key} {article.unit}</span> <span className="feature-type">{article.price_breaks[key]} {article.currency}/{article.unit}</span>

                    </div>;
                })}
            </div>
        </div>



    </div>);
}

export default Pricing;