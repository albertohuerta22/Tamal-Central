import axios from 'axios';

import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_DETAILS_FAIL,
} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get('/api/products');

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.message
          ? error.resonse.data.message
          : error.message,
    });
  }
};

export const listProductDetails = () => async (dispatch) => {
  try {
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_DETAILS_FAIL,
      payload:
        error.response && error.response.message
          ? error.resonse.data.message
          : error.message,
    });
  }
};
