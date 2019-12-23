import React from 'react';

import Classes from "./Welcome.css";

const Welcome = () =>{
    let welcomeClass = [];
    welcomeClass.push(Classes.ReactContainer, Classes["rail-background"]);
    return (
        <div className={Classes.ReactContainer}>
            <div className={Classes.ReactRail}></div>
            <h1>Weclome to Euro Rail</h1>
        </div>
    )
};

export default Welcome;