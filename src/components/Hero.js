import React from "react";
import heroImage from '../images/photo-grid.png';

function Hero() {
    return (
        <div className="hero">
            <img src={heroImage} className="hero-image"></img>
            <div className="hero-text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
}

export default Hero;