import React, { useEffect } from 'react'
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Users from '../components/Admin/Users';
import Pizzas from '../components/Admin/Pizzas';
import Orders from '../components/Admin/Orders';
import NewPizza from '../components/Admin/NewPizza';
import {useSelector} from 'react-redux';
import './Admin.css';
import EditPizza from '../components/Admin/EditPizza';
import General from '../components/Admin/General';

const AdminScreen = () => {
    const userState = useSelector(state => state.loginUserReducer)
    const {currentUser} = userState;

    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('currentUser')===null || !currentUser.isAdmin  ){
            window.location.href = "/";
        }
    })

    return (
        <div id='admin'>
            <h1 style={{ textAlign: 'center', backgroundColor: 'black',color:"white",margin:'1rem 2rem', padding:'1rem' }}> Admin Panel</h1>
            <Row style={{margin: '0 2rem'}}>
                <Col md={2}>
                    <ButtonGroup vertical style={{ textAlign: 'center'}}>
                        <h6>All Items</h6 >
                        <Button style={{ backgroundColor: "rgba(255,150,0,0.7)", color: 'black', border: 'none', borderRadius: '0.3rem',minHeight:'3rem' }}
                            onClick={() => navigate('allusers')}
                        >Users</Button>
                        <Button style={{ backgroundColor: "rgba(255,150,0,0.7)", color: 'black', border: 'none', borderRadius: '0.3rem',minHeight:'3rem' }}
                            onClick={() => navigate('allpizzas')}
                        >Pizzas</Button>
                        <Button style={{ backgroundColor: "rgba(255,150,0,0.7)", color: 'black', border: 'none', borderRadius: '0.3rem',minHeight:'3rem' }}
                            onClick={() => navigate('allorders')}
                        >Orders</Button>
                        <h6>Updation</h6 >
                        <Button style={{ backgroundColor: "rgba(255,150,0,0.7)", color: 'black', border: 'none', borderRadius: '0.3rem',minHeight:'3rem' }}
                            onClick={() => navigate('addNewPizza')}
                        >Add New Pizza</Button>
                    
                    </ButtonGroup>
                </Col>
                <Col md={10}>
                    
                    <Routes>
                        
                        <Route path='/' element={<General />} />
                        <Route path='allusers' element={<Users />} />
                        <Route path='allorders' element={<Orders />} />
                        <Route path='allpizzas' element={<Pizzas />} />
                        <Route path='addNewPizza' element={<NewPizza />} />
                        <Route path='editPizza/:id' element={<EditPizza />} />
                    </Routes>
                </Col>

            </Row>
        </div>
    )
}

export default AdminScreen