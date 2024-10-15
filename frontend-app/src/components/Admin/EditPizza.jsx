import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Row, Col, Button, Form } from 'react-bootstrap'
import Loader from '../Loader'
import Error from '../Error'
import Success from '../Success'
import { getPizzabyId, updatePizza } from '../../actions/pizzaAction'

const EditPizza = () => {
  const { id } = useParams();

  const pizzabyIdState = useSelector(state => state.getPizzabyIdReducer)
  const { pizza, error } = pizzabyIdState;
  const dispatch = useDispatch()

  console.log(pizza);

  const [name, setname] = useState('');
  const [regPrice, setregPrice] = useState();
  const [medPrice, setmedPrice] = useState();
  const [largePrice, setlargePrice] = useState();
  const [image, setimage] = useState('');
  const [description, setdescription] = useState('');
  const [category, setcategory] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pizza) {
      if (pizza._id === id) {
        setLoading(false);
        setname(pizza.name)
        setregPrice(pizza.prices[0]['regular'])
        setmedPrice(pizza.prices[0]['medium'])
        setlargePrice(pizza.prices[0]['large'])
        setdescription(pizza.description)
        setcategory(pizza.category)
        setimage(pizza.image)
      }
      else {
        dispatch(getPizzabyId(id))
      }
    } else {
      dispatch(getPizzabyId(id))
    }
  }, [dispatch, pizza, id]);

  const submitForm = (e) => {
    e.preventDefault();
    const updatedPizza = {
      _id: id,
      name, image, description, category,
      prices: {
        regular: regPrice,
        medium: medPrice,
        large: largePrice
      }
    }
    console.log(updatedPizza);
    dispatch(updatePizza(updatedPizza))
  }

  const updatePizzaState = useSelector(state => state.updatePizzaReducer)
  const { update_success } = updatePizzaState;

  return (
    <>
      {loading && <Loader />}
      {error && <Error error="Something's Not Right" />}
      {update_success && <Success success="Pizza Updated Successfully..." />}
      {!loading && (<>
        <h3>Edit : {name} Details</h3>
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
            Update Pizza
          </Button>
        </Form> </>)}
    </>
  )
}

export default EditPizza