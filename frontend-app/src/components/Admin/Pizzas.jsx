import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Table } from 'react-bootstrap'
import Loader from '../Loader'
import Error from '../Error'
import {deletePizza, getAllPizzas} from '../../actions/pizzaAction'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom'


const Pizzas = () => {
  const dispatch = useDispatch()
  const pizzaState = useSelector(state => state.getAllPizzaReducer)
  const { loading, pizzas, error } = pizzaState;
  useEffect(() => { dispatch(getAllPizzas()) }, [dispatch]);

  return (
    <>
      {loading ? (<Loader />)
        : error ? (
          <Error error={`Error while fetching pizzas: ${error.message}`}></Error>
        )
          : (<div>
            <Table striped bordered hover style={{textAlign:'center'}}>
              <thead>
                <tr >
                  <th>Image</th>
                  <th>Pizza Name</th>
                  <th>Prices<br/>
                    <Row>
                        <Col md={4}>Regular</Col>
                        <Col md={4}>Medium</Col>
                        <Col md={4}>Large</Col>
                      </Row></th>
                  <th>Category</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {pizzas.map((pizza, index) => (
                  <tr key={index}>
                    <td style={{width:'12rem'}}>
                      <img style={{height:'8rem',width:'12rem',margin:'0'}} src={pizza.image} alt="" />
                    </td>
                    <td style={{textAlign:'left'}}>
                      {pizza.name}
                      </td>
                    <td>
                      <Row>
                        <Col md={4}>{pizza.prices[0]['regular']}</Col>
                        <Col md={4}>{pizza.prices[0]['medium']}</Col>
                        <Col md={4}>{pizza.prices[0]['large']}</Col>
                      </Row>
                    </td>
                    <td style={{ textTransform: 'capitalize' }}>{pizza.category}</td>
                    <td>
                      <Link to={`/admin/editpizza/${pizza._id}`}>
                      <FaRegEdit  style={{cursor: 'pointer', fontSize:'1.2rem', color: '#508D4E'}}/>
                      </Link>
                      &emsp;
                      <RiDeleteBin6Line style={{cursor: 'pointer',color:'#EE4E4E'}} onClick={() => {dispatch(deletePizza(pizza._id))}} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>)
      }
    </>
  )
}

export default Pizzas