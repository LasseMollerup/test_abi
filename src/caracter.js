import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Caracter = (props) => {

    const [caracterResponses, setCaracterResponses] = useState({
        name: '',
        born: '',
        title: '',
        actor: '',
    })

    // useEffect to create different character ID for all four caracters in render
    useEffect(() => {

        let randomNumber = Math.floor((Math.random() * 8) + 1)
        let ENumber = Math.floor((Math.random() * randomNumber) + 10)

        GetCaracters(ENumber)
    }, [])

    // Functoin to change state of Subscription
    const [subSuccess, setSubSuccess] = useState(false)

    useEffect(() => {
        if (props.sub === true) {
            setSubSuccess(true)
        }
    }, [props.sub])

    // Function to retreive data from API and place it in the state.
    const GetCaracters = async (e) => {
        let caracterID = e;
        try {
            const findCaracters = await axios.get('https://anapioficeandfire.com/api/characters/' + caracterID);

            setCaracterResponses({
                name: findCaracters.data.name,
                born: findCaracters.data.born,
                title: findCaracters.data.aliases[0],
                actor: findCaracters.data.playedBy[0],
            })
        } catch (error) {
        }
    }

    return (
        <div>
            {
                // Changing state for the veiw, from landing page to Success page
            (subSuccess === true)
            ? <div className="congrats">
                <h2>Congratulations your invitation has been sent</h2>
            </div>
            : <div className="caracter">
                {(caracterResponses.name === '')
                    ? <p className="noDataFromAPI"> <span className="name">Name:</span> <span className="notStated">not stated in API</span></p>
                    : <p className="dataFromAPI name">Name: <span>{caracterResponses.name}</span></p>
                }

                {(caracterResponses.born === '')
                    ? <p className="noDataFromAPI">Born: <span className="notStated">not stated in API</span></p>
                    : <p className="dataFromAPI">Born: <span>{caracterResponses.born}</span></p>
                }

                {(caracterResponses.title === '')
                    ? <p className="noDataFromAPI">Title: <span className="notStated">not statet in API</span></p>
                    : <p className="dataFromAPI">Title: <span>{caracterResponses.title}</span></p>
                }

                {(caracterResponses.actor === '')
                    ? <p className="noDataFromAPI">Actor: <span className="notStated">not stated in API</span></p>
                    : <p className="dataFromAPI">Actor: <span>{caracterResponses.actor}</span></p>
                }
            </div>
            }
        </div>
    )
}

export default Caracter