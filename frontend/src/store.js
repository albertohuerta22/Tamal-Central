import { combineReducers, configureStore } from '@reduxjs/toolkit';

//reducer imports
import { productListReducer } from './reducers/productReducers';

const reducer = combineReducers({
  productList: productListReducer,
});

const initialState = {};

const store = configureStore({
  initialState,
  reducer,
});

export default store;
