import { combineReducers, configureStore } from '@reduxjs/toolkit';

//reducer imports
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

const initialState = {};

const store = configureStore({
  initialState,
  reducer,
});

export default store;
