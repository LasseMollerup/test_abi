import React from 'react';
import Caracter from './caracter'

import Daenarys from './resources/images/landing-page-screenshot-2020-03-03-at-112719@2x.png'
import Arya from './resources/images/success-page-screenshot-2020-03-03-at-112719-1@2x.png'
import Cersei from './resources/images/success-page-screenshot-2020-03-03-at-112719-2@2x.png'
import Theon from './resources/images/landing-page-screenshot-2020-03-03-at-112719-3@2x.png'


const Caracters = () => {

    return (
<div className="CaractersSection">    
            <div className="caractersDisplayed">
                <img className="caracterImg" src={Daenarys} alt="Daenarys"></img>
                <Caracter/>
            </div>
            <div className="caractersDisplayed">
                <img className="caracterImg" src={Arya} alt="Arya"></img>
                <Caracter/>
            </div>
            <div className="caractersDisplayed">
                <img className="caracterImg" src={Cersei} alt="Cersei"></img>
                <Caracter/>
            </div>
            <div className="caractersDisplayed">
                <img className="caracterImg" src={Theon} alt="Theon"></img>
                <Caracter/>
            </div>

        {/* caracterResponses={caracterResponses} */}
        </div>
    )

}

export default Caracters