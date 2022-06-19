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
    // <Hero />

    // ----- Card Mapping
    let cardsArr = data.map(card => {
        return (<Card
            key={card.id}
            img={card.coverImg}
            rating={card.stats.rating}
            reviewCount={card.stats.reviewCount}
            location={card.location}
            title={card.title}
            price={card.price} />)
    });
    // ----- JSX
    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cardsArr}
            </section>
        </div>
    )
}
