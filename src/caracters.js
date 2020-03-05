import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Caracter from './caracter'

const Caracters = () => {
    const [caracterResponses, setCaracterResponses] = useState({})
    
    let rows = []

    useEffect(() =>{
        let ENumber = Math.floor((Math.random() * 10) + 1)
        for(let i=0; i<4; i++) {
            GetCaracters(ENumber)
        }
        
    }, [])
    console.log('rows', rows)

    const GetCaracters = async (e) => {
        console.log('e', e)
        const num = e;
        try {
            const findCaracters = await axios.get('https://anapioficeandfire.com/api/characters/' + num);
            console.log('findCaracters', findCaracters.data)

            rows.push({
                name: findCaracters.name,
                born: findCaracters.born,
                title: findCaracters.data.aliases[0],
                actor: findCaracters.playedBy,
            })
            setCaracterResponses({
                name: findCaracters.name,
                born: findCaracters.born,
                title: findCaracters.data.aliases[0],
                actor: findCaracters.playedBy,
            })
            
        } catch(error){
            console.log('error in try/catch in GetCaracters', error)
        }
        console.log('rows2', rows)
        rows.push(caracterResponses)
    }
    console.log('caracterResponses', caracterResponses)

    return (
        <div className="div">
  
        <Caracter caracterResponses={caracterResponses}/>
        </div>
    )

}

export default Caracters