import React from 'react'
import MouseIcon from "../assets/icon-scroll.svg";

function Hero() {
    return (
        <section className="hero">
            <div className="hero__container">
                <h1>Get paid for the work you <span>love</span> to do</h1>
                <p>The 9-5 grind is so last century. We believe in living life on your
                own terms. Whether you're looking to escape the rat race or set up a side hustle,
                we've got your covered</p>
                <img src={MouseIcon} />
            </div>
        </section>
    )
}

export default Hero
