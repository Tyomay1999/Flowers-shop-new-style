import { CLEAR_MESSAGE, SET_MESSAGE, SET_ORDER_DETAILS } from "../Action/common.action";

const initialState = {
    loading: false,
    message: '',
    orderDetails: []
}

export const commonReducer = (state = initialState, action) => {
    switch ( action.type ){
        case SET_MESSAGE:
            return {...state, message: action.payload}
        case CLEAR_MESSAGE:
            return {...state, message: ''}
        case SET_ORDER_DETAILS:
            return {...state, orderDetails: [...action.payload]}
        default:
            return state
    }
}