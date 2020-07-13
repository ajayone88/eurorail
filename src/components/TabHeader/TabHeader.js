import React from 'react';
import classes from './TabHeader.css';
const tabHeader = (props) =>{
    return (
        <div 
            className={[classes.TabHeader, classes[props.selected]].join(' ')}
            onClick={props.clicked}>{props.alpha}</div>
    )
};

export default tabHeader;