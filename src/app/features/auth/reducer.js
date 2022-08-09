import {
    LOGIN_SUCCESS,
    LOGOUT,
  } from './constants';

  const user = localStorage.getItem("user");
  const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

  const auth = ( state = initialState, action) => {
    const { type, payload } = action;
    switch(type){
        case LOGIN_SUCCESS:
            return{
              ...state,
              isLoggedIn: true,
              user: payload,
            }
        case LOGOUT:
            return {
                isLoggedIn: false,
                user: null,
            }    
        default:
            return state
    }
}

export default auth;

 /* let initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };
  export default function auth (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: false,
        };
      case REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.token,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      default:
        return state;
    }
  }*/