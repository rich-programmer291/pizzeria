import React, {useEffect,useState} from 'react'
import { Alert } from 'react-bootstrap'

const Success = ({ success }) => {

   
   return (
        <>
            <Alert variant='success'>
                {success}
            </Alert>
        </>
    )
}

export default Success