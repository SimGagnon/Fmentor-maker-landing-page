import React from 'react'
import dataCard from "./data";
import PricingCard from "./PricingCard.js";
import "../../scss/_pricing.scss"

function Entry(dataCard) {
    return (
      <PricingCard
        key={dataCard.id}
        image={dataCard.image}
        title={dataCard.title}
        description={dataCard.description}
        price={dataCard.price}
        list={dataCard.list}
      />
    );
  }
 
function Pricing() {
    return (
        <section className="pricing">
            <div className="pricing__text">
                <h2>Our pricing plans</h2>
                <p>We only make money when our creators make money. Our plans are always
                affordable, and it's completely free to get started.</p>
            </div>
            {dataCard.map(Entry)}
        </section>
    )
}

export default Pricing
