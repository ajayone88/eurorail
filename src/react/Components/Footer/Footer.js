import React from "react";

import Classes from "./Footer.css";

const Footer = ( props ) =>{
    return (
        <div className={Classes.Footer}>
            <nav>
                <ul>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </nav>
        </div>
    )
};

export default Footer;