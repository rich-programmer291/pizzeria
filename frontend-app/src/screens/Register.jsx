import React, {  useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/userAction';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [checked, setChecked] = useState(false);


    const registerState = useSelector(state => state.registerUserReducer)
    const { error, success, loading } = registerState;

    const dispatch = useDispatch();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== cpassword)
            alert('Password do not match');
        else {
            if (name.length < 3) {
                alert('Name should at least be 3 or more characters.')
            }
            else if (!emailRegex.test(email)) {
                alert('Please enter a valid email');
            }
            else if (!passwordRegex.test(password)) {
                alert('Password must be of at least 8 characters.\nMust contain a special character.\nMust have at least 1 digit from [0-9].')
            }
            else if (checked === false) {
                alert('Please Accep the Terms and Conditions to Proceed.');
            }
            else {
                const user = { name, email, password };
                dispatch(registerUser(user));
                setName(''); setEmail(''); setPassword(''); setCpassword('');
            }
        }
    }

    return (
        <><Container
            style={{ padding: '3rem 6rem 5rem 6rem', backgroundColor: 'rgba(199, 200, 204,0.3)', marginTop: '2rem', borderRadius: '20px' }}>
            {success && (<Success success="Registration Successful. Kindly Login to Proceed..."></Success>)}
            {error && (<Error error={error['message']} />)}
            {loading ? (<Loader />)
                :
                (<Form>
                    <h2 style={{ textAlign: 'center', margin: '0.5rem 0' }}>User Registration</h2>
                    <Form.Group className="mb-3" >
                        <p className="text-muted" style={{ fontWeight: '300', fontSize: '0.9rem', margin: '0.4rem 0', textAlign: "center" }}>
                            Already have an account? Please
                            <a style={{ textDecoration: 'none' }} href='/login' alt='Terms and Conditions'>
                                &nbsp;Login
                            </a>
                            .
                        </p>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Confirm Password"
                            value={cpassword}
                            onChange={(e) => setCpassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <p className="text-muted" style={{ fontWeight: '300', fontSize: '0.7rem', margin: '0.4rem 0' }}>
                            We never share your data with anyone else. Please go through our
                            <a style={{ textDecoration: 'none' }} href='/tc' alt='Terms and Conditions'>
                                &nbsp;Terms & Conditions
                            </a>
                            &nbsp;for any concerns.
                        </p>

                        <Form.Check
                            type="checkbox"
                            label="Accept our Terms and Conditions"
                            checked={checked}
                            onChange={(e) => setChecked(e.target.checked)}
                        />
                    </Form.Group>
                    <div style={{ textAlign: 'center' }}>
                        <Button
                            variant="primary"
                            onClick={handleRegister}
                        >
                            Register
                        </Button>
                    </div>

                </Form>)
            }
        </Container>
        </>
    )
}

export default Register