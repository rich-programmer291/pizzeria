import React from 'react'
import {Container} from 'react-bootstrap';

const Footer = () => {
  return (
    <>
    <Container style={{textAlign: 'center', padding:'0.7rem 0', marginTop:'7rem'}}>
    <p>Icons & illustrations by react-icons and 
        <a href='https://icons8.com/' style={{textDecoration: 'none', color: 'inherit', fontWeight: '500'}}>&nbsp;icons8.</a>
        <br />
        Pizzeria logo by
        <a href='https://www.flaticon.com/' style={{textDecoration: 'none', color: 'inherit', fontWeight: '500'}}>&nbsp;flaticon.</a>

    </p>
    <h6>Made with 🩷 by Richa Anand</h6>

    </Container>
       
    </>
  )
}

export default Footer