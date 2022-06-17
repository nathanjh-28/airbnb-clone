import React from "react";
import logo from '../images/airbnb-logo.png';


function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} width="82px"></img >
            <div className="navbar-bottom-border"></div>
        </div>
    )
}

export default Navbar;
