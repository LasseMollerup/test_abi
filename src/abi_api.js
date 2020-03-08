import React from 'react'
import axios from 'axios'

const ABIapi = () => {

    const tryApi = async () => {

        try {
            const response = await axios.post('https://abi.api.ai/v1/user/{userId}/subscription')

        } catch(error) {
            console.log(error)
        }

    }

    return(

    )

}
export default ABIapi