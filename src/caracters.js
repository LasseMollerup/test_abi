import React, { useState } from 'react';

// Components
import Caracter from './caracter'
import Invite from './invite'

// Images
import Daenarys from './resources/images/landing-page-screenshot-2020-03-03-at-112719@2x.png'
import Arya from './resources/images/success-page-screenshot-2020-03-03-at-112719-1@2x.png'
import Cersei from './resources/images/success-page-screenshot-2020-03-03-at-112719-2@2x.png'
import Theon from './resources/images/landing-page-screenshot-2020-03-03-at-112719-3@2x.png'



const Caracters = (props) => {

    //State to check if subscription is done
    const [subscription, setSubscription] = useState(false)

    const [sub, setSub] = useState(false)

    // function to set states regarding states of subscription in different components.
    const handleSubscription = () => {
        if (subscription === false) {
            setSubscription(true)
            setSub(true)
            props.handleInviteClick()
        }
    }

    return (
        <div className="CaractersSection">
            <div className="caractersDisplayed">
                <img className="caracterImg" src={Daenarys} alt="Daenarys"></img>
                <Caracter sub={sub} />
                <Invite handleInviteClick={props.handleInviteClick} InviteBeenClicked={props.InviteBeenClicked} handleSubscription={handleSubscription} />
            </div>
            <div className="caractersDisplayed">
                <img className="caracterImg" src={Arya} alt="Arya"></img>
                <Caracter />
                <Invite handleInviteClick={props.handleInviteClick} InviteBeenClicked={props.InviteBeenClicked} />
            </div>
            <div className="caractersDisplayed">
                <img className="caracterImg" src={Cersei} alt="Cersei"></img>
                <Caracter />
                <Invite handleInviteClick={props.handleInviteClick} InviteBeenClicked={props.InviteBeenClicked} />

            </div>
            <div className="caractersDisplayed">
                <img className="caracterImg" src={Theon} alt="Theon"></img>
                <Caracter />
                <Invite handleInviteClick={props.handleInviteClick} InviteBeenClicked={props.InviteBeenClicked} />
            </div>
        </div>
    )
}

export default Caracters