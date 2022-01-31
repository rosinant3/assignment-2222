import React, { useRef, useEffect, useState, useContext } from 'react';
import {  PageContext } from '../dataStore';

export const useHeaderScrollTop = () => {

    const [ isTop, setIsTop ] = useState(true);

    useEffect(()=>{

        const checkIfScrolledTop = () => {

            if (window.scrollY === 0 && isTop === false) {
                setIsTop(true);
            } else if (window.scrollY > 0 && isTop === true) {
                setIsTop(false);
            }
        };

        window.addEventListener('scroll', checkIfScrolledTop);

        return () => {
            window.removeEventListener('scroll', checkIfScrolledTop)
        }

    }, [isTop]);

    return { isTop };
};

export const useHeaderCartAnimation = (cart) => {

    const { visible } = useContext(PageContext);

    const [ initial, setInitial ] = useState(0);
    const [ animationValue, setAnimationValue ] = useState('');

    useEffect(()=>{

      if (initial > 0) {

        setAnimationValue("");
        setTimeout(()=>{
            setAnimationValue("jumpingBall 1s forwards");
        }, 10)
      }

      if (initial === 0) {
        setInitial(initial + 1);
      }

    }, [cart.items]);

    return { visible, animationValue };
};