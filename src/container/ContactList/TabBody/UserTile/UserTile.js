import React from 'react';
import "./UserTile.css";

const UserTile = (props) =>{
    return (
        <a href="#!" className="collection-item">
            {props.user.first}
        </a>
    )
};

export default  UserTile;