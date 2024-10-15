import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Row, Col, Container, Table } from 'react-bootstrap';
import { FaRegEdit } from "react-icons/fa";


const ProfileScreen = () => {
    const userState = useSelector(state => state.loginUserReducer);
    const currentUser = userState.currentUser;
    const properties = Object.keys(currentUser)

    return (
        <>
            <Container style={{ margin: '3rem 4rem', height: '100lvh' }}>
                <Row>
                    <Col md={2}>
                        <img
                            src='/images/generalProfile.png'
                            style={{ marginTop:'2rem',width: '8rem', borderRadius: '5rem', boxShadow: '0 1px 4px grey' }}
                            alt='profile'
                        />
                    </Col>
                    <Col>
                        <div
                        style={{}}>
                            <Link to={`/editprofile`}
                            style={{textDecoration:'none',display:'flex', alignItems:'center', float:'right'}}
                            >
                                Edit Profile &nbsp;
                                <FaRegEdit /> 
                            </Link>
                        </div>

                        <Table striped bordered hover>
                            <tbody>
                                {properties.filter(prop => prop !== '_id' && prop !== 'isAdmin')
                                    .map((prop, index) => (
                                        <tr key={index}>
                                            <th style={{ textTransform: 'capitalize' }}>{prop}</th>
                                            <td>{currentUser[prop]}</td>
                                        </tr>
                                    ))}

                            </tbody>

                        </Table>
                    </Col>
                </Row>


            </Container>
        </>
    )
}

export default ProfileScreen