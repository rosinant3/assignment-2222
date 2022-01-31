import React, { useState, useContext } from 'react';
import './images.css';
import Grid from '@mui/material/Grid';
import { useImageEvents } from './imageHooks';
import Image from './image';
import PackageSVG from '../../svgs/packageSVG';
import ZoomInSVG from '../../svgs/zoomInSVG';

const Images = ({ images }) => {

    const [ selectedImage, setSelectedImage ] = useState(0);
    const { imageError, ref } = useImageEvents(setSelectedImage, -1);
    const imageStyle = (flag) => { return { display: flag ? "none" : "flex" }; };

    return (<div>
        <Grid container spacing={2}>
            <Grid item xs={4} sm={3} md={2} lg={3}>
                <div>
                    {images.map((image, index)=>{
                        return <Image 
                        
                            index={index} 
                            key={image} 
                            src={image}
                            selectedImage={selectedImage}
                            setSelectedImage={setSelectedImage} 

                        /> 
                    })}
                </div>
            </Grid>
            <Grid item xs={8} sm={7} md={10} lg={9}>
                <div className="image-large">
                    <img ref={ref} src={images[selectedImage]} style={imageStyle(imageError)} />
                    <div  className="center-container" style={imageStyle(!imageError)}>
                        <PackageSVG className="svg-size-large" />
                    </div>
                    <div className="zoom-container">
                        <ZoomInSVG />
                    </div>
                </div>
            </Grid>
        </Grid>
    </div>);
}


export default Images;