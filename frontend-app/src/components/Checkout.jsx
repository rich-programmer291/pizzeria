import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { placeOrder } from '../actions/orderAction'
import Loader from './Loader';
import Error from './Error';
import Success from './Success';

const Checkout = ({ total }) => {
    const orderState = useSelector(state => state.placeOrderReducer)
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // const cartState = useSelector(state => state.cartReducer)
    // let {cartItems} = cartState;
    const { loading, error, success } = orderState;
    const dispatch = useDispatch();

    const handleToken = (token, setItem) => {
        dispatch(placeOrder(token, total))
        // console.log(token);
        let cartItems = [];
        if (success) {
            localStorage.setItem('cartItems', cartItems);
            window.location.href = '/cart';
        }
    }

    return (
        <>
            {loading && (<Loader />)}
            {error && (<Error
                style={{ marginTop: '0.3rem', width: '90%' }}
                error="Something's Not Quite Right..." />)}
            {success && (<Success
                style={{ marginBottom: '-0.3rem', width: '90%' }}
                success="Order Placed Successfully...✅" />)}
            <StripeCheckout
                amount={total * 100}
                shippingAddress={currentUser.address} 
                token={handleToken}
                stripeKey='pk_test_51PkS9LRwRCQ405Pcf7XbHMtVLpk4v24IeTpjOkGhQEBISvnesJwKV0SCWHMnFibZ3bXZ6rsqU4lg23yBCeEewz4200tecuBLqU'
                currency='INR'
                email={currentUser.email}    
                name={currentUser.name}      
                billingAddress               
            >
                <Button
                    style={{ marginTop: '0.3rem', backgroundColor: 'black', width: '100%' }}>
                    Checkout
                </Button>
            </StripeCheckout>

        </>
    )
}

export default Checkout