import { React, useEffect, useState } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

import { GrFormSubtract } from "react-icons/gr";
import { IoAdd } from "react-icons/io5";

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartAction';

const PizzaCard = ({ item }) => {
    const [variant, setVariant] = useState('regular');
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();
    const cartState = useSelector(state => state.cartReducer);
    const cartItems = cartState.cartItems;

    const addToCartHandler = () => {
        const currentUser = localStorage.getItem('currentUser');
        if (!currentUser) {
            alert('Please Login to Order!');
        } else
            dispatch(addToCart(item, qty, variant));
    }

    useEffect(() => {
        const newItem = cartItems.find((currentItem) => (currentItem._id === item._id && currentItem.var === variant));
        if (newItem) {
            setQty(newItem.quantity)
        }
        else {
            setQty(1)
        }
    }, [cartItems, variant])

    function handleDec() {
        if (qty === 0)
            setQty(0)
        else
            setQty(qty - 1);
    }

    function handleInc() {
        if (qty === 10)
            alert('10 is the Maximum Order Quantity');
        else
            setQty(qty + 1);
    }

    return (
        <>
            <Card style={{ width: '20rem', marginTop: '1rem', padding: '0' }}>
                <div className="img">
                    <Card.Img variant="top" src={item.image} style={{ height: '12rem', cursor: 'pointer' }} />
                    <div className="desc">
                        <p >{item.description}</p>
                    </div>
                </div>

                <Card.Body>
                    <Card.Title >
                        {item.category === 'veg' ?
                            <div 
                            style={{display:'flex'}}
                            ><img style={{ width: '1.45rem'}} src="/images/veg.png" alt="" />&nbsp;{item.name}</div>
                            :
                            <div
                            style={{display:'flex'}}
                            ><img style={{ width: '1.45rem' }} src="/images/nonveg.png" alt="" />&nbsp;{item.name}</div>
                        }
                    </Card.Title>
                    <hr />
                    <Row>
                        <Col md={7}>
                            <h6>Size</h6>
                            <select id='dropdown' onChange={(e) => setVariant(e.target.value)}>
                                {item.variants.map((vr, index) => (
                                    <option key={index} value={vr}>{vr}</option>
                                ))}
                            </select>
                        </Col>
                        <Col md={5} style={{ float: 'right' }}>
                            <h6 style={{ marginTop: '0.3rem' }}>Quantity</h6>
                            <div id="qty-mgr">
                                <div id='qty-btn' onClick={handleDec}><GrFormSubtract /></div>
                                {qty}
                                <div id='qty-btn' onClick={handleInc}><IoAdd /></div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}><span style={{ fontWeight: '500'}}>Price : </span><br />₹ {item.prices[0][variant] * qty}</Col>
                        <Col md={6} style={{ display: 'flex', justifyContent: 'right' }}>
                            <Button variant="primary" style={{ marginTop: '0.5rem' }} onClick={addToCartHandler}>Add to Cart</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default PizzaCard