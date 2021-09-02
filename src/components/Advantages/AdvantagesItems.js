import React from 'react'
import "../../scss/_advantages.scss";

function AdvantagesItems(props) {
    return (
        <div className="advantages__item">
            <div><img src={props.image} alt="" /></div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>  
        </div>
    )
}

export default AdvantagesItems
