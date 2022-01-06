import {combineReducers,configureStore} from '@reduxjs/toolkit'
import commonReducer from '../Reducers/common.reducer'
const rootReducer = combineReducers({
    commonReducer
})

export const store = configureStore({
    reducer: rootReducer
})