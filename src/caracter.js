import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Caracter = (props) => {

    const [caracterResponses, setCaracterResponses] = useState({})

    // console.log('props =>', props.randomNum)

    useEffect(()=>{

         let ENumber = Math.floor((Math.random() * 10) + 1)
       
            GetCaracters(ENumber)

    }, [])
   
    const GetCaracters = async (e) => {
        // console.log('e', e)
        let caracterID = e;
        try {
            const findCaracters = await axios.get('https://anapioficeandfire.com/api/characters/' + caracterID);
            console.log('findCaracters', findCaracters.data)

            setCaracterResponses({
                name: findCaracters.name,
                born: findCaracters.born,
                title: findCaracters.data.aliases[0],
                actor: findCaracters.playedBy,
            })
            
        } catch(error){
            console.log('error in try/catch in GetCaracters', error)
        }
       
        // console.log('caracterResponses', caracterResponses)
    }

    return (
        <div className="caracter">
        <p>Name {caracterResponses.name}</p>    
        <p>Born {caracterResponses.born}</p>
        <p>Title {caracterResponses.title}</p>
        <p>Actor {caracterResponses.actor}</p>
        </div>
    )

}

export default Caracter