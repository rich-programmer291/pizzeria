export const registerUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_REGISTER_REQUEST':
            return {
                loading: true,
            }
        case 'USER_REGISTER_SUCCESS':
            return {
                loading: false,
                success: true,
            }
        case 'USER_REGISTER_EMAIL_EXIST':
            return {
                loading: false,
                error: action.payload
            }
        case 'USER_REGISTER_FAIL':
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return (state);
    }
};

export const loginUserReducer = (state = { currentUser: [] }, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
            return {
                loading: true
            }
        case 'USER_LOGIN_SUCCESS':
            console.log("\n\n" + action.payload + "\n\n");
            return {
                loading: false,
                success: true,
                currentUser: action.payload,
            };

        case 'USER_LOGIN_FAIL':
            return {
                loading: false,
                error: action.payload,
            }

        default:
            return state;
    }
};

export const getAllUsersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case 'GET_USERS_REQUEST':
            return {
                loading: true,
            }
        case 'GET_USERS_SUCCESS':
            return {
                loading: false,
                users: action.payload,
            }
        case 'GET_USERS_FAIL':
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export const userForgotPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_FORGOT_PASSWORD_REQUEST':
            return { loading: true };
        case 'USER_FORGOT_PASSWORD_SUCCESS':
            return { loading: false, success: true, message: action.payload };
        case 'USER_FORGOT_PASSWORD_FAIL':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const userResetPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_RESET_PASSWORD_REQUEST':
            return { loading: true };
        case 'USER_RESET_PASSWORD_SUCCESS':
            return {
                loading: false,
                success: true,
                message: action.payload
            };
        case 'USER_RESET_PASSWORD_FAIL':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const updateUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_USERID_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'UPDATE_USERID_SUCCESS':
            return {
                loading: false,
                success: true
            }
        case 'UPDATE_USERID_FAIL':
            return {
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
};