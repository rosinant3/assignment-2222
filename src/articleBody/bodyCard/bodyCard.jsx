import React, { useContext } from 'react';
import './bodyCard.css';
import CurrencyFormat from 'react-currency-format';
import { generateStarsArray } from './bodyCardUtility';
import StarFilledSVG from '../../svgs/starFilledSVG';
import StarSVG from '../../svgs/starSVG';
import DiscountSVG from '../../svgs/discountSVG';
import {  PageContext } from '../../dataStore';
import AddToCart from '../../addToCart/addToCart';

const BodyCard = ({ article }) => {

    const currency = ` ${article.currency} `;
    const stars = generateStarsArray(article.stars);
    const { scrollInputRef, visible } = useContext(PageContext);

    return (
        <div className="card">
            <div>
            <div className="card-title"><strong>{article.title}</strong></div>
            <div className="card-link">by <span><a href={article.supplier_link} target="_blank" rel="noopener noreferrer">{article.supplier_name}</a></span> </div>
            <div className="stars-container">
            {stars.map((value, index)=>{

                if (value === 1) {
                    return <StarFilledSVG key={index} value={value} />;
                } 

                return <StarSVG key={index} />;

            })}
            </div>
            <div className="card-price">
                <div className="price-flex">
                    <strong>
                        <CurrencyFormat value={article.price.toFixed(2).replace('.', ',')} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} />
                        {currency}
                    </strong>
                    <span className="grey-text">+<CurrencyFormat value={article.transport_costs.toFixed(2).replace('.', ',')} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} />{currency} shipping</span>
                <DiscountSVG />
                </div>
                <div>
                    <span className="grey-text">all prices incl. {article.vat_percent}% taxes</span>
                </div>
            </div>
      
        </div>
        <div className="input-container">
            { visible ? <AddToCart unit={article.unit} /> : "" }
            <div style={{ height: !visible ? "0.8rem" : "0px" }} ref={scrollInputRef}></div>
        </div>
    </div>);
}

export default BodyCard;
