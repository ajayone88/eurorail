import React from 'react';
import "./TabBody.css";

import UserTile from './UserTile/UserTile';
const TabBody = (props) =>{
    let userTiles = props.users.map( (val, index) =>{
        return <UserTile key={index} user={val}/>
    });
    return (
        <section className="section section-tab-body">
            <div className="collection">
                {userTiles }
                </div>
        </section>
    )
};

export default TabBody;