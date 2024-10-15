export const getAllPizzaReducer = (state = {pizzas:[]}, action) => {
    switch (action.type) {
        case 'GET_PIZZAS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'GET_PIZZAS_SUCCESS':
            return {
                pizzas: action.payload,
                loading:false
            }
        case 'GET_PIZZAS_FAIL':
            return {
                error: action.payload,
                loading:false
            }
        default:
            return state;
    }
};

export const addPizzaReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PIZZAS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'ADD_PIZZAS_SUCCESS':
            return {
                loading:false,
                success: true
            }
        case 'ADD_PIZZAS_FAIL':
            return {
                error: action.payload,
                loading:false
            }
        default:
            return state;
    }
};

export const getPizzabyIdReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PIZZAID_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'GET_PIZZAID_SUCCESS':
            return {
                loading:false,
                pizza: action.payload
            }
        case 'GET_PIZZAID_FAIL':
            return {
                error: action.payload,
                loading:false
            }
        default:
            return state;
    }
};

export const updatePizzaReducer = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_PIZZAID_REQUEST':
            return {
                ...state,
                update_loading: true
            }
        case 'UPDATE_PIZZAID_SUCCESS':
            return {
                update_loading:false,
                update_success: true
            }
        case 'UPDATE_PIZZAID_FAIL':
            return {
                update_error: action.payload,
                update_loading:false
            }
        default:
            return state;
    }
};