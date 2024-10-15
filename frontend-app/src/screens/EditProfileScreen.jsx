import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../actions/userAction';
import Loader from '../components/Loader';
import Success from '../components/Success';
import Error from '../components/Error';

const EditProfileScreen = () => {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const dispatch = useDispatch();
    const userState = useSelector(state => state.updateUserReducer);
    const { error, success, loading } = userState;

    const id = currentUser._id;
    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);
    const [address, setAddress] = useState(currentUser.address || '');
    const [contact, setContact] = useState(currentUser.contact || '');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    // console.log(currentUser);

    const handleProfileEdit = (e) => {
        e.preventDefault();
        if (name.length > 2) {
            if (emailRegex.test(email)) {
                if (phoneRegex.test(contact)) {
                    const updatedUser = { id, name, email, address, contact };
                    console.log(updatedUser);
                    dispatch(updateUser(updatedUser));
                }
                else { alert('Incorrect Phone Number'); }
            } else { alert('Incorrect Format for Email ID') }
        } else { alert('Name should be 3 or more characters.') }
    }

    return (
        <>
            <Container style={{ margin: '2rem' }} className='bg-light p-3'>
                <h2 style={{ textAlign: 'center' }}>Edit Profile</h2>
                {error && (<Error error={error} />)}
                {success && (<Success success='User Updated Successfully.' />)}
                {
                    loading ? (<Loader />) :

                        (<Form onSubmit={handleProfileEdit}>
                            <Form.Group className='mt-4'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mt-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mt-3" controlId="formBasicEmail">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mt-3" controlId="formBasicEmail">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Mobile Number"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
                                    <Button
                                        variant="primary"
                                        type='submit'
                                    >
                                        Save Details
                                    </Button>
                                </div>
                            </Form.Group>
                        </Form>)
                }
            </Container>
        </>
    )
}

export default EditProfileScreen