import React, { useContext, useRef, useEffect } from 'react';
import "./addToCart.css";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AddSVG from '../svgs/addSVG';
import { useAddToCart, useInputChange } from './addToCartHooks';

const InputBox = styled(TextField)(() => ({
  '& fieldset': {
    borderRadius: '0px',
  },
  '& .MuiInputBase-input': {
    height: "0.8rem",
    fontSize: "0.8rem",
    color: "black",
    fontWeight: "bold",
    textAlign: "right",
    padding: "8.5px 8px"
  }
}));

const OrangeButton = styled(Button)(() => ({
    backgroundColor: "var(--main-color)",
    boxShadow: "none",
    fontSize: "0.8rem",
    height: "100%",
    borderRadius: "0px",
    textTransform: "none",
    fontWeight: "bold",
    '&:hover': {
      backgroundColor: "var(--main-color-hover)",
      boxShadow: "none"
    },
  }));



const AddToCart = ({ unit }) => {

    const { quantity, setQuantity, handleChange, dispatch } = useInputChange(setQuantity);
    const { buttonRef } = useAddToCart(setQuantity, quantity, dispatch);

    return (<div className="add-to-cart">
        <div className="text-field-container">
            <InputBox 
            
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                size="small"
                value={quantity}
                onChange={handleChange}

            />
            <div className="unit-box">{unit}</div>
        </div>
        <div>
            <OrangeButton 
            
                variant="contained"
                size="small"
                ref={buttonRef}
                
            ><AddSVG /> Add to cart</OrangeButton>
        </div>
    </div>);
}


export default AddToCart;