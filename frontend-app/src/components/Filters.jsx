import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { filterPizza } from '../actions/pizzaAction';

const Filters = () => {
    const [searchKey, setSearchKey] = useState('');
    const [category, setcategory] = useState('all');

    const dispatch = useDispatch();

    return (
        <div className="p-2 ">
            <Form>
                <Row style={{display:'flex', alignItems:'center'}}>
                    <Col>
                        <Form.Control
                            value={searchKey}
                            onChange={(e) => (setSearchKey(e.target.value))}
                            placeholder="Search Pizza" />
                    </Col>
                    <Col>
                        <Form.Select
                            value={category}
                            onChange={(e) => (setcategory(e.target.value))}
                        >
                            <option >All</option>
                            <option >Veg</option>
                            <option >NonVeg</option>
                        </Form.Select>
                    </Col>
                    <Col md={1}>
                        <Button
                        onClick={() => (dispatch(filterPizza(searchKey,category)))}
                        >Search</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default Filters