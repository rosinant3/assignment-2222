import React, { useContext, useState, useEffect } from 'react';
import './header.css';
import FavoriteSVG from '../svgs/favoriteSVG';
import CartSVG from '../svgs/cartSVG';
import FactsSoftSVG from '../svgs/factsSoftSVG';
import AddToCart from '../addToCart/addToCart';
import { useHeaderCartAnimation, useHeaderScrollTop } from './headerHooks';

const Header = ({article, cart}) => {
 
    const { visible, animationValue } = useHeaderCartAnimation(cart);
    const { isTop } = useHeaderScrollTop();

    return (<div style={{ boxShadow: !isTop ? "0px 1px 1px rgb(240, 236, 236)" : "" }} className="page-header">
      <div className="page-title">{article.title}</div>
      <div className="icon-container input-and-icon"> 
          <div className="input-container">
            { !visible ? <AddToCart unit={article.unit} /> : "" }
          </div>

<div className="icon-container">


          <div>
            <FavoriteSVG />
            <FactsSoftSVG />
          </div>
          <div className="cart-border">
            <div style={{ animation: animationValue }} className="cart-items">{cart.items}</div>
            <CartSVG />
          </div>

</div>
      </div>
    </div>);
}

export default Header;