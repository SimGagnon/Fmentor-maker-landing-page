import React from 'react'

function PricingCard(props) {
    return (
        <div className="pricing__card">
            <div className="pricing__card__top">
                <img src={props.image} alt="" />
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className="pricing__card__bottom">
                <h2>{props.price}</h2>
                <ul>
                    <li>{props.list}</li>
                </ul>
            </div>
            
        </div>
    )
}

export default PricingCard
