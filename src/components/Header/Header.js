import React from 'react';

const Header = () =>{
    return (
        <div>
            <div className="navbar-fixed">
                <nav className="nav-wrapper teal">
                    <div className="container">
                        <a className="brand-logo" href="#home">Home</a>
                        <a  href="#" data-target="side-out" className="sidenav-trigger hide-on-med-and-up">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-small-and-down">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#Contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <ul className="sidenav" id="side-out">
                <h3 className="center-align green-text">Eurail</h3>
                <div className="divider"></div>
                <li><a href="#home" className="green-text">
                    <i className="material-icons green-text">home</i>
                    Home</a>
                </li>
                <li><a href="#Contact" className="green-text">
                    <i className="material-icons green-text">contacts</i>
                    Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Header;