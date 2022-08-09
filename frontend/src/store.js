import { combineReducers, configureStore } from '@reduxjs/toolkit';

//reducer imports
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers';

import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const initialState = {};

const store = configureStore({
  initialState,
  reducer,
});

export default store;
