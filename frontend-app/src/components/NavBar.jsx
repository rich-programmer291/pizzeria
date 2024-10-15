import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container, Image, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { MdOutlineLogout } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions/userAction.js';
import { FaUser } from "react-icons/fa";


const NavBar = () => {

    const cartState = useSelector(state => state.cartReducer);

    const [total, setTotal] = useState(0);

    //login
    const userState = useSelector(state => state.loginUserReducer);
    const currentUser = userState.currentUser;


    const dispatch = useDispatch();

    useEffect(() => {
        var final = 0;
        cartState.cartItems.forEach((currentItem) => (
            final += currentItem.quantity
        ))
        setTotal(final);
    }, [cartState])


    return (
        <>
            <Navbar collapseOnSelect bg="light" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/" style={{ fontWeight: '700', color: '#FFAF00', fontSize: '1.4rem', display: 'flex', gap: '0.5rem' }}>
                        <Image src={'/images/ico.png' || '../images/ico.png'} alt='logo' style={{ height: '2rem' }} /> Pizzeria
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            {
                                currentUser ?
                                    (<div>
                                        {/* <Nav.Link> {currentUser.name}</Nav.Link> */}
                                        <NavDropdown
                                            title={
                                            <span>
                                                <FaUser style={{ marginRight: '2px', fontSize:'1.4rem' }} /> {currentUser.name}
                                            </span>}
                                            id="basic-nav-dropdown">
                                                <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
                                            {currentUser.isAdmin === true &&
                                                (<NavDropdown.Item href="/admin">Admin</NavDropdown.Item>)
                                            }
                                            <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
                                            <NavDropdown.Item
                                                onClick={() => {
                                                    dispatch(logoutUser());
                                                }}
                                            >
                                                Logout <MdOutlineLogout />
                                            </NavDropdown.Item>

                                        </NavDropdown>
                                    </div>
                                    )
                                    :
                                    <>
                                        <LinkContainer to='/login'>
                                            <Nav.Link>Login</Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to='/register'>
                                            <Nav.Link> Register</Nav.Link>
                                        </LinkContainer>
                                    </>

                            }

                            <LinkContainer to='/cart'>
                                <Nav.Link>Cart 
                                <span style={{ backgroundColor: '#FFAF00', color: 'black', fontWeight: '500', padding: '0.1rem 0.4rem', borderRadius: '50%', marginLeft:'4px' }} >{total}</span></Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar></>
    )
}

export default NavBar