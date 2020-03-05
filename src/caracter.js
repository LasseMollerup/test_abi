import React from 'react'

const Caracter = (props) => {

    return (
        <div className="caracter">
        <p>Name {props.caracterResponses.name}</p>    
        <p>Born {props.caracterResponses.born}</p>
        <p>Title {props.caracterResponses.title}</p>
        <p>Actor {props.caracterResponses.actor}</p>
        </div>
    )

}

export default Caracter