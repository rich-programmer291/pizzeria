import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import ItemCard from '../components/ItemCard'
import Checkout from '../components/Checkout'

const CartScreen = () => {

  const tax = 0.05;
  const charges = 15;
  const cartState = useSelector(state => state.cartReducer)
  const cartItems = cartState.cartItems;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    var total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    })
    setTotalPrice(total);
  }, [cartItems])


  return (
    <>
      <Container>
        <Row key='here'>
          <Col md={7} style={{ marginTop: '1.5rem' }}>
            <h1>My Cart</h1>
            {cartItems.map((item, index) => (
              <Row key={index}>
                <ItemCard key={"new"+index} item={item} />
              </Row>
            ))}

          </Col>
          <Col style={{ marginTop: '1.5rem' }}>
            <Card style={{ width: "100%", padding: "0.5rem 0", minHeight: '30rem', minWidth: '12rem' }}>
              <h1 style={{ textAlign: 'center' }}>Payment Info</h1>
              <hr style={{ margin: '0', marginBottom: '1.5rem' }} />
              <Row style={{ margin: '0.2rem 0.5rem' }}>
                <Col>
                  <h6 style={{ fontWeight: '400' }}>Sub-Total: </h6>
                  <h6 style={{ fontWeight: '400' }}>Taxes (5%): </h6>
                  <h6 style={{ fontWeight: '400' }}>Handling Charges: </h6>
                </Col>
                <Col style={{ textAlign: 'right' }}>
                  <h6>₹ {totalPrice.toFixed(2)}</h6>
                  <h6>₹ {(totalPrice * tax).toFixed(2)}</h6>
                  <h6>₹ {(charges).toFixed(2)}</h6>
                </Col>
                 </Row>
              <Row style={{ margin: '0.2rem 0.5rem', marginTop: '16rem' }}>
                <Col>
                <h5 style={{ }}>Grand Total: </h5>
                </Col>
                <Col style={{ textAlign: 'right' }}>
                {
                  totalPrice > 0 ?
                  <h5 style={{ }}>₹ {(totalPrice + (totalPrice * tax) + charges).toFixed(2)} </h5>
:                 <h5 style={{ }}>₹ {(0).toFixed(2)} </h5>

                }
                </Col>
                <Checkout total={(totalPrice + (totalPrice * tax) + charges).toFixed(2)}/>             
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CartScreen