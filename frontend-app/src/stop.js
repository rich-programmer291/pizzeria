import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import { getAllPizzaReducer } from './reducers/pizzaReducer';

const store = configureStore({
  reducer: {
    pizzas: getAllPizzaReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: true, // devTools is enabled by default in development mode
});

export default store;
