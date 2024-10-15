import React, { useEffect } from 'react'
import { getUserOrders } from '../actions/orderAction';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import Loader from '../components/Loader';
import Error from '../components/Error';

const OrdersScreen = () => {
  const dispatch = useDispatch()
  const orderState = useSelector(state => state.getUserOrderReducer)
  const { loading, orders, error } = orderState;
  useEffect(() => { dispatch(getUserOrders()) }, [dispatch]);

  // const reverseOrders = orders.slice().reverse();

  function formatDate(isoDate) {
    const date = new Date(isoDate);

    const formattedDate = date.toLocaleString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false, // 24-hour format
    });

    // Replacing ' at ' with a space
    return formattedDate.replace(' at ', ' ');
  }

  function capitalize(word) {
    if (!word) return ''; // Check if the word is empty or undefined
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }


  return (
    <>
      <Container style={{ marginTop: '2rem', width: '100%' }}>
        {loading ? (<Loader />)
          : error ? (
            <Error error={`Error while fetching orders: ${error.message}`}></Error>
          )
            : (<div>
              <h1>Your Orders</h1>
              {orders.length == 0 && (<div style={{minHeight:'100vh'}}><h2>No orders to show</h2></div>)}
              {orders.slice().reverse().map((order, index) => (
                <div key={'order' + index} style={{ margin: '1.5rem 0', backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: '1rem', boxShadow:'0 2px 2px grey',cursor:'pointer'}}>
                  <Row style={{ backgroundColor: 'rgba(255,175,0,0.5)', padding: '1rem 0.7rem', margin: '0', borderRadius: '1rem 1rem 0rem 0rem', fontWeight: '500' }}>
                    <>
                    <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'0.5rem'}}>
                    <h5 style={{margin:'0',lineHeight:'0'}}>ORDER #{Math.round(index + 1 * (Math.random() * 100))}</h5>
                    {order.isDelivered === true ? 
                      <FaRegCheckCircle style={{color: 'green',fontSize:'1.2rem'}} />
                      :
                      <RxCrossCircled style={{color: 'red', fontWeight:'600',fontSize:'1.2rem'}}/>
                    }
                    </div>
                      <h6 style={{ fontWeight: '400'}}>{formatDate(order.createdAt)} </h6>
                      <h6 style={{ fontWeight: '400'}}>Transaction ID: {order.transactionId}</h6>
                      <h5 style={{margin: '0'}}>₹ {order.orderAmount}</h5>
                    </>
                  </Row>
                  <Row style={{ padding: '1rem 1.3rem', minHeight:'5rem'}}>
                    {order.orderItems.map((item,index) => (
                        <h6 key={item.name+index} style={{fontWeight: '400' }}>
                          ▪️ {item.quantity} x {item.name} : {capitalize(item.var)}
                        </h6>
                    ))}
                  </Row>

                </div>
              )) 
          }
            </div>)
        }
      </Container>
    </>
  )
}

export default OrdersScreen