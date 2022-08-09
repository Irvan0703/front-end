import { GET_PRODUCT} from './constants';

let initialProduct = [];

const productReducer = ( state = initialProduct, action) => {
    const { type, payload } = action;
    switch(type){
        case GET_PRODUCT:
            return{
                ...state,
                payload
            }
        default:
            return state
    }
}

export default productReducer;