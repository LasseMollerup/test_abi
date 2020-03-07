import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Caracter = () => {

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
            ? <p className="noDataFromAPI"> <span className="name">Name:</span> <span className="notStated">not stated in API</span></p>
            : <p className="dataFromAPI name">Name: <span>{caracterResponses.name}</span></p>    
            }

            { (caracterResponses.born === '') 
            ? <p className="noDataFromAPI">Born: <span className="notStated">not stated in API</span></p>
            : <p className="dataFromAPI">Born: <span>{caracterResponses.born}</span></p>
            }

            { (caracterResponses.title === '')
            ? <p className="noDataFromAPI">Title: <span className="notStated">not statet in API</span></p>
            : <p className="dataFromAPI">Title: <span>{caracterResponses.title}</span></p>
            }

            { (caracterResponses.actor === '')
            ? <p className="noDataFromAPI">Actor: <span className="notStated">not stated in API</span></p>
            : <p className="dataFromAPI">Actor: <span>{caracterResponses.actor}</span></p>
            }
        </div>
    )

}

export default Caracter