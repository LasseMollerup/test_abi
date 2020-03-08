import React, { useState } from 'react'

const Invite = (props) => {

    // State and function to toggle the pop-up window for the invite for ABI
    const [togglePopUp, setTogglePopUp] = useState(false)

    const toggle = () => {
        props.handleInviteClick()

        if (togglePopUp === false) {
            setTogglePopUp(true)
        }
        else if (togglePopUp === true) {
            setTogglePopUp(false)
        }
    }
    // State and function to decide if 'Invite to ABI' text should be shown or not.
    const [showInviteText, setShowInviteText] = useState(true)

    const onSubmit = () => {
        props.handleSubscription()
        setShowInviteText(false)
    }

    return (
        <div>
            {
                (props.InviteBeenClicked === true && togglePopUp === true)
                    ?
                    <div className='popup'>
                        <div className='popup_inner'>
                            <h3>Sign up to ABI Global Health API</h3>
                            <form>
                                <input type='date' placeholder="Type in Subscription Start Date"></input>
                                <input type='date' placeholder="Type in Subscription End Date"></input>
                            </form>
                            <button onClick={onSubmit}>Submit Subscription</button>
                            <button onClick={toggle}>Cancel</button>
                        </div>
                    </div>
                    : null
            }
            {
                (showInviteText === true)
                    ? <p onClick={toggle} className="invite">INVITE TO ABI API</p>
                    : null
            }
        </div>
    )
};

export default Invite