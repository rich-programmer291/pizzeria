export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const item = action.payload;
            const existingItem = state.cartItems.find((currentItem) => (currentItem._id === item._id && currentItem.var === item.var));

            
            if (item.quantity === 0)
                return {
                    ...state,
                    cartItems: [...state.cartItems]
                }
            else if (existingItem) {
                
                return {
                    ...state,
                    cartItems: state.cartItems.map((currentItem) => ( 
                        currentItem._id === item._id && currentItem.var === item.var ? (
                            item
                        )
                            :
                        currentItem))
                }
            }
            else
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                };   
                
        case 'DELETE_FROM_CART':
            return{
                ...state,
                cartItems: state.cartItems.filter((cartItem) => !(action.payload.id === cartItem._id && action.payload.var === cartItem.var) )
            }
        default:
            return state

    }
}