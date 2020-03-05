import React from 'react';
import signal from './resources/images/landing-page-cellular-connection@2x.png'
import wifi from './resources/images/success-page-wifi@2x.png'

import whatRU from './resources/images/success-page-whathouseareyouu2026@2x.png'


const Header = () => {

    return (
        <div className="header">
            <div className="topbar">
                <div className="time">9:41</div>
                <div className="symbols">
                    <img className="SignalStrengh" alt="SignalStrengh" src={signal}></img>
                    <img className="WifiSymbol" alt="WifiSymbol" src={wifi}></img>
                    <div className="BatteryLevel" alt="batteryLevel"></div>                
                </div>
            </div>
                <img className="whatRU" src={whatRU} alt="What_House_Are_You_Heading"></img>

        </div>
    )
}

export default Header