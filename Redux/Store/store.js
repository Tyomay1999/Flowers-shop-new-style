import {combineReducers, configureStore} from '@reduxjs/toolkit'
import commonReducer from '../Reducers/common.reducer'
import productReducer from '../Reducers/product.reducer'
import cartReducer from '../Reducers/cart.reducer'

const rootReducer = combineReducers({
    commonReducer,
    productReducer,
    cartReducer
})

export const store = configureStore({
    reducer: rootReducer
})