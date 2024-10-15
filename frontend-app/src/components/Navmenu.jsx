import React from 'react'
import { MdLocalOffer } from "react-icons/md";

import {Navbar, Nav, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Navmenu = () => {
  return (
    <>
    <Navbar bg="dark" variant='dark' expand='lg'>
      <Container fluid>
        <h6 className='text-warning'>
          <MdLocalOffer />&nbsp;&nbsp;
          CURRENTLY NOT ACCEPTING ORDERS ONLINE...</h6>
        <Nav className='ms-auto'>
          <LinkContainer to="/"><Nav.Link>Menu</Nav.Link></LinkContainer>
          <LinkContainer to="/about"><Nav.Link>About Us</Nav.Link></LinkContainer>
          <LinkContainer to="/contact"><Nav.Link>Contact Us</Nav.Link></LinkContainer>
          <LinkContainer to="/tc"><Nav.Link>Terms & Policies</Nav.Link></LinkContainer>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default Navmenu;