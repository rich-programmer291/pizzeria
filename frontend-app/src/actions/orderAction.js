import axios from 'axios';

export const placeOrder = (token,total) => async (dispatch, getState) => {
    dispatch({type:'PLACE_ORDER_REQUEST'})
    const currentUser = getState().loginUserReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems;
    try{
         const res = await axios.post('/api/orders/placeorder',{token,total,currentUser,cartItems});
         dispatch({type:'PLACE_ORDER_SUCCESS'})
         console.log(res);

    }catch (err){
        dispatch({type: 'PLACE_ORDER_FAIL'})
        console.log(err);
    }
}

export const getUserOrders = () => async (dispatch,getState) => {
    const currentUser = getState().loginUserReducer.currentUser;
    dispatch({type: 'USER_ORDER_REQUEST'})
    try{
        const response = await axios.post('/api/orders/getuserorder',{userid: currentUser._id});
        dispatch({type: 'USER_ORDER_SUCCESS',payload:response.data});
    }
    catch(err){
        console.log(err);
        dispatch({type:'USER_ORDER_FAIL', payload:err});
    }
}

export const getAllOrders = () => async (dispatch) => {
    dispatch({type: 'ALL_ORDERS_REQUEST'})
    try{
        const response = await axios.get('/api/orders/getallorders');
        dispatch({type: 'ALL_ORDERS_SUCCESS',payload:response.data});
    }
    catch(err){
        console.log(err);
        dispatch({type:'ALL_ORDERS_FAIL', payload:err});
    }
}

export const deliverOrder = (orderId) => async (dispatch) => {
    dispatch({type: 'DELIVER_ORDER_REQUEST'})
    try{
        await axios.post('/api/orders/deliveraorder',{orderId});
        alert("Order Delivered Successfully.");
        const orders = await axios.get('/api/orders/getallorders');
        dispatch({type: 'DELIVER_ORDER_SUCCESS',payload:orders.data});
        window.location.href = '/admin/allorders';
    }
    catch(err){
        console.log(err);
        dispatch({type:'DELIVER_ORDER_FAIL', payload:err});
    }
}