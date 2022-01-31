import React from 'react';
import './images.css';
import { useImageEvents } from './imageHooks';
import PackageSVG from '../../svgs/packageSVG';
 
const Image = ({ src, selectedImage, setSelectedImage, index }) => {

    const { imageError, ref } = useImageEvents(setSelectedImage, index);
    const containerStyle = () => { return { display: selectedImage === index ? "none" : "block" }; };
    const imageStyle = (flag) => { return { display: flag ? "none" : "flex" }; };

    return (<div style={containerStyle()} className="image-preview" >
        <img src={src} ref={ref} style={imageStyle(imageError)} />
        <div className="center-container" style={imageStyle(!imageError)}>
            <PackageSVG className="svg-size-medium" />
        </div>
    </div>)
}; 

export default Image;