import React from 'react';
import "./TabHeader.css";

const TabHeader  = (props) =>{
    return (
        <div className="Tab" >{props.itemName}</div>
    )
};

export default TabHeader;