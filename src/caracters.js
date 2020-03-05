import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Caracter from './caracter'

const Caracters = () => {

    const [caracterResponses, setCaracterResponses] = useState({})

    useEffect(() =>{
        GetCaracters()
    }, [])
    const GetCaracters = async () => {
        try {
            const findCaracters = await axios.get('https://anapioficeandfire.com/api/characters/12');
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
    }
    console.log('caracterResponses', caracterResponses)

    return (
        <Caracter caracterResponses={caracterResponses}/>
    )

}

export default Caracters