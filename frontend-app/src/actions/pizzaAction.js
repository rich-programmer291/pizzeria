import axios from 'axios'
import swal from 'sweetalert';


export const getAllPizzas = () => async (dispatch) => {
    dispatch({type: 'GET_PIZZAS_REQUEST'})
    try{
        const res = await axios.get('https://pizzeria-back-kmys.onrender.com/api/pizzas/getAllPizzas')
        console.log(res);
        dispatch({type: 'GET_PIZZAS_SUCCESS',payload:res.data})
    }
    catch(err){
        console.log(err);
        dispatch({type: 'GET_PIZZAS_FAIL',payload:err});
    }
}

export const addPizza = (pizza) => async (dispatch) => {
    dispatch({type: 'ADD_PIZZAS_REQUEST'})
    try{
        const res = await axios.post('/api/pizzas/addpizza',{pizza})
        dispatch({type: 'ADD_PIZZAS_SUCCESS',payload:res.data})
    }
    catch(err){
        console.log(`${err}`);
        dispatch({type: 'ADD_PIZZAS_FAIL',payload:err});
    }
}

export const getPizzabyId = (pizzaId) => async (dispatch) => {
    dispatch({type: 'GET_PIZZAID_REQUEST'})
    try{
        const res = await axios.post('/api/pizzas/getpizzabyid',{pizzaId})
        console.log(res.data);
        dispatch({type: 'GET_PIZZAID_SUCCESS',payload: res.data})
    }
    catch(err){
        console.log(`${err}`);
        dispatch({type: 'GET_PIZZAID_FAIL',payload:err});
    }
}

export const updatePizza = (updatedPizza) => async (dispatch) => {
    dispatch({type: 'UPDATE_PIZZAID_REQUEST'})
    try{
        const res = await axios.post('/api/pizzas/updatepizza',{updatedPizza})
        dispatch({type: 'UPDATE_PIZZAID_SUCCESS',payload: res.data})
        window.location.href='/admin/allpizzas';

    }
    catch(err){
        console.log(`${err}`);
        dispatch({type: 'UPDATE_PIZZAID_FAIL',payload:err});
    }
}

export const deletePizza = (pizzaId) => async (dispatch) => {
    try{
        await axios.post('/api/pizzas/deletepizza',{pizzaId});
        swal("Pizza Deletion is successful", "Success");
        window.location.href='/admin/allpizzas';
    }
    catch(err){
        swal("Error while deleting Pizza...");
        console.log(err);
    }
}

export const filterPizza = (searchKey,category) => async (dispatch) => {
    var filteredPizza;
    dispatch({type:'GET_PIZZAS_REQUEST'})
    try{
        const res = await axios.get('/api/pizzas/getAllPizzas')
        filteredPizza = res.data.filter(pizza => pizza.name.toLowerCase().includes(searchKey))
        if(category !== 'all'){
            filteredPizza = res.data.filter(pizza => pizza.category.toLowerCase() === category.toLowerCase())
        }
        dispatch({type:'GET_PIZZAS_SUCCESS',payload: filteredPizza});
    }
    catch(err){
        dispatch({type:'GET_PIZZAS_FAIL', payload:err});
    }
}

