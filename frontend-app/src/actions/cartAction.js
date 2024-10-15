
export const addToCart = (pizza,qty,variant) => (dispatch,getState) => {
    var cartItem = {
        name: pizza.name,
        _id: pizza._id,
        image:pizza.image,
        var: variant,
        quantity: Number(qty),
        prices: pizza.prices,
        price: pizza.prices[0][variant]*qty,
        category: pizza.category
    };
    dispatch({type:'ADD_TO_CART', payload:cartItem});
    localStorage.setItem('cartItems',JSON.stringify(getState().cartReducer.cartItems))

};

export const deleteFromCart = (pizzaId,variant) => (dispatch,getState) => {
    // alert('Pizza Deleted from cart successfully.')
    var pizzaItem = {
        id: pizzaId,
        var: variant}
    dispatch({type: 'DELETE_FROM_CART', payload:pizzaItem});

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
} 