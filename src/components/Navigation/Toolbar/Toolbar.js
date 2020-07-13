import React from 'react';
import classes from './Toolbar.css';
const toolbar = () =>{
    return (
       <div className={classes.Toolbar}>
            <div>Menu</div>
            <div>Logo</div>
            <div>Contact List</div>
       </div>
    )
};

export default toolbar;