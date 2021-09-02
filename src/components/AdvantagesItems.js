import React from 'react'

function AdvantagesItems(props) {
    return (
        <div class="advantages__item">
            <img src={props.image} alt="" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default AdvantagesItems
