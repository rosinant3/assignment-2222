import React, { useRef, useEffect, useState, useContext } from 'react';

import { PageContext, actions } from '../dataStore';

export const useInputChange = () => {

    const inputRef = useRef(null);
    const value = useContext(PageContext);
    const { setQuantity, quantity, dispatch } = value;

    const handleChange = (e) => {

        const value = Number(e.target.value);
        setQuantity(value);
    };


    return { dispatch, inputRef, quantity, setQuantity, handleChange };
};

export const useAddToCart = (setQuantity, quantity, dispatch) => {

    const buttonRef = useRef(null);

    useEffect(()=>{

        const dispatchQuantity = () => {
 
            dispatch(actions.addToCart(quantity));
            setQuantity(1);
        };

        const currentButton = buttonRef.current;
        currentButton && currentButton.addEventListener('click', dispatchQuantity);

        return () => {

            if (currentButton) {
                currentButton.removeEventListener('click', dispatchQuantity);
            }
        };
    }, [ buttonRef, quantity ]);

    return { buttonRef };
};