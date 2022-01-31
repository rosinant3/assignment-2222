import React, { useRef, useEffect, useState } from 'react';
import Rosinante from './rosinante';

export const useInputVisbility = () => {

    const [ visible, setVisbile ] = useState(true);
    const scrollInputRef = useRef();

    useEffect(()=>{

        let Rosi = new Rosinante({
  
            scrollContainer: window, 
            scrollItem: scrollInputRef.current, 
            scrollTarget: scrollInputRef.current,
            once: false,
            visible: () => { 
       
                if (scrollInputRef.current && visible === false) {
                    setVisbile(true);
                }

               
            }, 
            notVisible: () => {
                if (scrollInputRef.current && visible === true) {
                    setVisbile(false);
                }

            }, 
            throttle: 150, 
            responsiveBreakPoint: 800, 
            elementPieceSmall: 20, 
            elementPieceLarge: 20

        });
        
        Rosi.callRosinante();
        
        return () => {

            if (Rosi) {

                Rosi.removeRosinante();
            }
        }

    }, [scrollInputRef, visible]);

    return { scrollInputRef, visible };
}

