import React from "react";
import cardImageZaferas from '../images/katie-zaferes.png'
import star from '../images/star.png'
/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

function Card() {
    return (
        <div className="card">
            <div className="card-image-section">
                <p className="sizzle-blurb">Sold Out</p>
                <img className="card-image" src={cardImageZaferas} alt=""></img>
            </div>
            <div className="card-footer">
                <img className="card-image" src={star} alt="" />
                <span>5.0</span>
                <span className="grey">(6)USA</span>
                <p>Life lessons with Katie Zaferas</p>
                <p> <span className="bold"> From $136 </span> / person</p>


            </div>
        </div>
    )
}

export default Card;