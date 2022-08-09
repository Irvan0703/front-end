import { applyMiddleware, combineReducers,compose,  legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
//import thunkMiddleware from 'redux-thunk'
import auth from "./features/auth/reducer";
import productReducer from './features/Product/reducer'
//import { composeWithDevTools } from 'redux-devtools-extension'
//import { configureStore } from '@reduxjs/toolkit'


let rootReducers = combineReducers({
    products: productReducer,
    auth,
});

const store = createStore( 
    rootReducers, 
    applyMiddleware(thunk) 
);
//const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
//const store = createStore(rootReducers, composedEnhancer);
//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//let store = createStore(rootReducers, composeEnhancer(applyMiddleware(thunk)));

export default store;