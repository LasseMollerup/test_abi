import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Caracter = (props) => {

    const [caracterResponses, setCaracterResponses] = useState({
                name: '',
                born: '',
                title: '',
                actor: '',
    })

    // const [datareceived, setDataReceived] = useState (false)
    // console.log('props =>', props.randomNum)

    useEffect(()=>{

         let randomNumber = Math.floor((Math.random() * 8) + 1)
         let ENumber = Math.floor((Math.random() * randomNumber) + 10)
       
            GetCaracters(ENumber)
            // setDataReceived(true)
    }, [])
   
    const GetCaracters = async (e) => {
        // console.log('e', e)
        let caracterID = e;
        try {
            const findCaracters = await axios.get('https://anapioficeandfire.com/api/characters/' + caracterID);
            console.log('findCaracters', findCaracters.data)

            setCaracterResponses({
                name: findCaracters.data.name,
                born: findCaracters.data.born,
                title: findCaracters.data.aliases[0],
                actor: findCaracters.data.playedBy[0],
            })
            
        } catch(error){
            console.log('error in try/catch in GetCaracters', error)
        }
       
    }
    console.log('caracterResponses', caracterResponses)

    return (
        <div className="caracter">
            { (caracterResponses.name === '') 
            ? <p className="noDataFromAPI">Name not stated in API</p>
            : <p className="dataFromAPI">Name {caracterResponses.name}</p>    
            }

            { (caracterResponses.born === '') 
            ? <p className="noDataFromAPI">Place of birth not stated in API</p>
            : <p className="dataFromAPI">Born {caracterResponses.born}</p>
            }

            { (caracterResponses.title === '')
            ? <p className="noDataFromAPI">Title not statet in API</p>
            : <p className="dataFromAPI">Title {caracterResponses.title}</p>
            }

            { (caracterResponses.actor === '')
            ? <p className="noDataFromAPI">Actor not stated in API</p>
            : <p className="dataFromAPI">Actor {caracterResponses.actor}</p>
            }
        </div>
    )

}

export default Caracter