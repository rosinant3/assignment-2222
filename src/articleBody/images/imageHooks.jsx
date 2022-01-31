import React, { useState, useEffect, useRef } from 'react';
import './images.css';

export const useImageEvents = (setSelectedImage, index) => {

    const [ imageError, setImageError ] = useState(false);
    const ref = useRef(null);

    useEffect(()=>{
        
        const selectImageOnClick = () => {

            if (index > -1) {
                setSelectedImage(index);
            }
        }

        const imageOnError = () => {

            setImageError(true);
        }

        const current = ref.current;
        current.addEventListener('click', selectImageOnClick);
        current.addEventListener('error', imageOnError);

        return () => {
                current.removeEventListener('click', selectImageOnClick);
                current.removeEventListener('click', imageOnError);
        };

    }, [ref]);

    
    return { imageError, ref }
}
