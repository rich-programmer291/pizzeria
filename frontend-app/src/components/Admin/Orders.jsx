import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deliverOrder, getAllOrders } from '../../actions/orderAction';
import Loader from '../Loader'
import Error from '../Error'
import { Button, Table } from 'react-bootstrap'

const Orders = () => {

  const dispatch = useDispatch()
  const ordersState = useSelector(state => state.getAllOrdersReducer)
  const { loading, orders, error } = ordersState;
  useEffect(() => { dispatch(getAllOrders()) }, [dispatch]);

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
    return formattedDate.replace(' at ', '\nTime: ');
  }

  return (
    <>
      {loading && <Loader />}
      {error && <Error error={error} />}

      <>
        <Table striped bordered hover >
          <thead>
            <tr >
              <th>Order ID</th>
              <th>Email</th>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders?.slice().reverse().map((order, index) => (
              <tr key={order._id} style={{fontSize:'0.85rem'}}>
                <td >{order._id}</td>
                <td>{order.email}</td>
                <td >{order.transactionId}</td>
                <td>{formatDate(order.createdAt)}</td>
                <td>₹ {order.orderAmount}</td>
                <td>{order.isDelivered === true ?
                  <div style={{ textAlign: 'center' }}>
                  <img src="/images/delivered.png" alt="delivered logo" style={{width:'3rem'}} />
                    </div>
                  :
                  <><Button
                  className='btn-danger'
                  onClick={()=>{const orderId = order._id; console.log(orderId); dispatch(deliverOrder(orderId))}}
                  >Deliver</Button></>
                }</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>

    </>
  )
}

export default Orders