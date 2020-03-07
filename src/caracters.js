import React from 'react';
// {useState, useEffect}
// import axios from 'axios';
import Caracter from './caracter'

const Caracters = () => {
 

    let randomNum = 10
    return (
        <div className="div">
  
        <Caracter randomNum={randomNum}/>
        <Caracter randomNum={randomNum}/>
        <Caracter randomNum={randomNum}/>
        <Caracter randomNum={randomNum}/>

        {/* caracterResponses={caracterResponses} */}
        </div>
    )

}

export default Caracters