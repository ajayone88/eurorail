import React from 'react';
import imageData from '../../../data-access/image-data';
import Slide from './Slide/Slide';
const Slider = () =>{
    const sliderArray = imageData.slider.map( (image, index) =>{
        return (
            <Slide key={index} imageName={image} />
        )
    });
    return (
        <div className="slider">
            <ul className="slides">
                {sliderArray}
            </ul>
        </div>
    )
};

export default Slider;