import React from 'react'
import AdvantagesItems from "./AdvantagesItems";
import dataAdvantage from "./data";
import "../../scss/_advantages.scss";


function item(dataAdvantage) {
    return (
      <AdvantagesItems
        key={dataAdvantage.id}
        image={dataAdvantage.image}
        title={dataAdvantage.title}
        description={dataAdvantage.description}
      />
    );
  }

function Advantages() {
    return (
        <section className="advantages">
            {dataAdvantage.map(item)}
        </section>
    )
}

export default Advantages
