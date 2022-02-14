import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {commonReducer} from "../Reducers/common.reducer";
import {productReducer} from "../Reducers/product.reducer";

const rootReducer = combineReducers({
    commonReducer,
    productReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk))