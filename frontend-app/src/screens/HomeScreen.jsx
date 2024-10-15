import React, { useEffect } from 'react'
// import data from '../pizza-data'
import { getAllPizzas } from '../actions/pizzaAction'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap'
import PizzaCard from '../components/PizzaCard'
import Loader from '../components/Loader';
import Error from '../components/Error';
import Filters from '../components/Filters';
import bcrypt from 'bcryptjs';

const HomeScreen = () => {

    const dispatch = useDispatch()
    const pizzaState = useSelector(state => state.getAllPizzaReducer)
    const { loading, pizzas, error } = pizzaState;
    useEffect(() => { dispatch(getAllPizzas()) }, [dispatch]);

   

    return (
        <>
            <Container style={{ padding: '2rem', width: '100%' }}>
                {loading ? (<Loader />)
                    : error ? (
                        <Error error={`Error while fetching pizzas: ${error.message}`}></Error>
                    )
                        : (<div>
                            <Row style={{ margin: '2rem', marginBottom: '3rem' }}>
                                <h1>Menu</h1>
                                <Filters />
                                {pizzas.map((pizza, index) => (
                                    <Col key={'pizza' + index} md={4}>
                                        <PizzaCard key={index} item={pizza} />
                                    </Col>
                                ))}
                                {pizzas.length === 0 &&
                                    <div
                                        style={{ textAlign: 'center', minHeight: '18rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                    >
                                        <h2>Oops!! No Results</h2></div>
                                }
                            </Row>
                        </div>)
                }
            </Container>
        </>
    )
}

export default HomeScreen