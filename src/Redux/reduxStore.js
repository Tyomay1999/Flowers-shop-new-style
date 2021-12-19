import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers( {

} )
let store = createStore(
    reducers,
    compose(
        applyMiddleware( thunkMiddleware ),
    ),
)
export default store