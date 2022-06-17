import React from "react";
import logo from '../images/airbnb-logo.png';


function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} className=".nav--logo"></img >
            {/* <div className="navbar-bottom-border"></div> */}
        </nav>
    )
}

export default Navbar;
