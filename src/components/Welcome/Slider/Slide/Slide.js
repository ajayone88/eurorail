import React from 'react';

const Slide  = (props) =>{
    return (
        <li>
            <img src={props.imageName} alt=""/>
            <div className="caption right-align green-text">
                <h3>Title</h3>
                <h5 className="black-text hide-on-med-and-down">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</h5>
            </div>
        </li>
    )
};

export default Slide;