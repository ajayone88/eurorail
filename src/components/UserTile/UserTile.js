import React from 'react';
import classes from './UserTile.css';
const userTile = (props) =>{
    return(
        <div className={classes.UserTile}>
            <img src={props.user.imageThumbnail} alt={'image'} />
            <div className={classes.UserDetails}>
                <div>{props.user.title} {props.user.first} {props.user.last}</div>
            </div>
        </div>
    )
};

export default userTile;