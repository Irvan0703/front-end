import * as api from '../../api/product'
import * as item from './constants'

export const getProducts = (params) => async (dispatch) => {
    try {
      const res = await api.getProduct({params});
      dispatch({
        type: item.GET_PRODUCT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
