import React from 'react'
import Caracters from './caracters';


const CaracterSection = () => {

    let rows = []
    const number = Math.floor(Math.random() * 10)
    for(let i=0; i<4; i++) {
        rows.push(<Caracters number={number}/>)
    }
    return (
        <div className="CaractersSection">
            <p>{rows}</p>
        </div>
    )
}

export default CaracterSection