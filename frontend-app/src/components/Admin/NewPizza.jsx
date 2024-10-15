import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import {addPizza} from '../../actions/pizzaAction'
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../Loader';
import Error from '../Error';
import Success from '../Success';

const NewPizza = () => {
  const [name, setname] = useState('');
  const [regPrice, setregPrice] = useState();
  const [medPrice, setmedPrice] = useState();
  const [largePrice, setlargePrice] = useState();
  const [image, setimage] = useState('');
  const [description, setdescription] = useState('');
  const [category, setcategory] = useState('');

  const addPizzaState = useSelector(state => state.addPizzaReducer);
  const {loading, error, success} = addPizzaState;

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault()
    const pizza = {
      name, image, description, category, 
      prices:{
        regular: regPrice,
        medium : medPrice,
        large: largePrice
      }
    }
    console.log(pizza);
    dispatch(addPizza(pizza))
  };

  return (
    <div>
      {loading && <Loader />}
      {error && <Error error="Something's Not Right"/>}
      {success && <Success success="New Pizza Added Successfully..." />}
      <Form onSubmit={submitForm} className='bg-light p-4'>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter Name" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>Regular Size Price</Form.Label>
            <Form.Control
              type='text'
              value={regPrice}
              onChange={(e) => setregPrice(e.target.value)}
              placeholder="Enter Price of Regular Pizza"
            />
          </Form.Group>

          <Form.Group as={Col} >
            <Form.Label>Medium Size Price</Form.Label>
            <Form.Control
              type='text'
              value={medPrice}
              onChange={(e) => setmedPrice(e.target.value)}
              placeholder="Enter Price for Medium Pizza"
            />
          </Form.Group>

          <Form.Group as={Col} >
            <Form.Label>Large Size Price</Form.Label>
            <Form.Control
              type='text'
              value={largePrice}
              onChange={(e) => setlargePrice(e.target.value)}
              placeholder="Enter Price of Large Pizza"
            />
          </Form.Group>

        </Row>

        <Form.Group as={Col} className='mb-3'>
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            value={image}
            onChange={(e) => setimage(e.target.value)}
            placeholder="Add Image URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            placeholder="Enter Description" />        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            value={category}
            onChange={((e) => setcategory(e.target.value))}
            placeholder="Enter Category" />
        </Form.Group>

        <Button type='submit'>
          Add New Pizza
        </Button>
      </Form>
    </div>
  )
}

export default NewPizza