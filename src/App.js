import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
import "./style.css"

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

export default function App() {

    // ----- Card Mapping
    let cardsArr = data.map(card => {
        return (<Card
            key={card.id}
            card={card}
        />)
    });
    // ----- JSX
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cardsArr}
            </section>
        </div>
    )
}
