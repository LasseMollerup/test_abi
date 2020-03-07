import React from 'react';
import Caracter from './caracter'

import Daenarys from './resources/images/landing-page-screenshot-2020-03-03-at-112719@2x.png'
import Arya from './resources/images/success-page-screenshot-2020-03-03-at-112719-1@2x.png'
import Cersei from './resources/images/success-page-screenshot-2020-03-03-at-112719-2@2x.png'
import Theon from './resources/images/landing-page-screenshot-2020-03-03-at-112719-3@2x.png'


const Caracters = () => {
 

    let randomNum = 10
    return (
<div className="CaractersSection">    
            <div>
                <img className="caracterImg" src={Daenarys} alt="Daenarys"></img>
                <Caracter randomNum={randomNum}/>
            </div>
            <div>
                <img className="caracterImg" src={Arya} alt="Arya"></img>
                <Caracter randomNum={randomNum}/>
            </div>
            <div>
                <img className="caracterImg" src={Cersei} alt="Cersei"></img>
                <Caracter randomNum={randomNum}/>
            </div>
            <div>
                <img className="caracterImg" src={Theon} alt="Theon"></img>
                <Caracter randomNum={randomNum}/>
            </div>

        {/* caracterResponses={caracterResponses} */}
        </div>
    )

}

export default Caracters