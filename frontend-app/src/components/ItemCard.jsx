import React from 'react'
import { Card, Image, Row, Col } from 'react-bootstrap';
//icons
import { GrFormSubtract } from "react-icons/gr";
import { IoAdd } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
//redux actions
import { useDispatch } from 'react-redux';
import { addToCart, deleteFromCart } from '../actions/cartAction'

const ItemCard = ({ item }) => {

    const dispatch = useDispatch();

    const handleMax = () => {
        alert('10 is the Maximum Order Quantity.');
    }

    return (
        <>
            <Card style={{ padding: '0.5rem', border: 'none', borderBottom: '' }}>
                <Card.Body>
                    <Row style={{ alignItems: 'center' }}>
                        <Col style={{ alignItems: 'center' }}>
                            <Image src={item.image} alt={item.name + ' image'} style={{ width: '200px', height: '150px', borderRadius: '5%', padding: '0.3rem 0', margin: '0' }} />
                        </Col>
                        <Col>
                            <Card.Title>
                                {item.category === 'veg' ?
                                    <div
                                        style={{ display: 'flex', flexWrap:'wrap' }}
                                    ><img style={{ width: '1.35rem' }} src="/images/veg.png" alt="" />&nbsp;{item.name}</div>
                                    :
                                    <div
                                        style={{ display: 'flex', flexWrap:'wrap' }}
                                    ><img style={{ width: '1.35rem' }} src="/images/nonveg.png" alt="" />&nbsp;{item.name}</div>
                                }
                            </Card.Title>
                            <Card.Text style={{ textTransform: 'capitalize' }}>
                                {item.var}
                            </Card.Text>
                            <div id="qty-mgr">
                                {item.quantity === 1 ?
                                    <div id='qty-btn' onClick={() => { dispatch(deleteFromCart(item._id, item.var)) }}><RiDeleteBin6Line /></div>
                                    :
                                    <div id='qty-btn' onClick={() => { dispatch(addToCart(item, item.quantity - 1, item.var)) }}><GrFormSubtract /></div>
                                }

                                {item.quantity}
                                {
                                    item.quantity >= 10 ?
                                        <div id='qty-btn' onClick={handleMax}><IoAdd /></div>
                                        : <div id='qty-btn' onClick={() => { dispatch(addToCart(item, item.quantity + 1, item.var)) }}><IoAdd /></div>

                                }
                            </div>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <h6>Price : <br /> {item.quantity} x {item.prices[0][item.var]}</h6>
                            <h2>₹ {item.prices[0][item.var] * item.quantity}</h2>
                        </Col>
                        <Col md={1}>
                            <div id='qty-btn' onClick={() => { dispatch(deleteFromCart(item._id, item.var)) }} style={{ marginTop: '5px', color: 'red', background: 'white' }}><RiDeleteBin6Line /></div>
                        </Col>
                    </Row>

                </Card.Body>
            </Card></>
    )
}

export default ItemCard