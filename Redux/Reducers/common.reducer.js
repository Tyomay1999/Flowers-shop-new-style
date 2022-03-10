import {
    CHANGE_LOADING,
    CHANGE_PAGES,
    CLEAR_MESSAGE,
    SET_MESSAGE,
    SET_ORDER_DETAILS,
    SET_PAGES_DATA
} from "../Action/common.action";

const initialState = {
    loading: false,
    message: '',
    orderDetails: [],
    page: 1,
    pagesCount: 1
}

export const commonReducer = (state = initialState, action) => {
    switch ( action.type ){
        case SET_MESSAGE:
            return {...state, message: action.payload}
        case CHANGE_LOADING:
            return {...state, loading: action.payload}
        case CLEAR_MESSAGE:
            return {...state, message: ''}
        case SET_ORDER_DETAILS:
            return {...state, orderDetails: [...action.payload]}
        case CHANGE_PAGES:
            console.log(action.payload, "<------ action payload")
            return {...state, page: action.payload}
        case SET_PAGES_DATA:
            return {...state, pagesCount: Math.ceil(action.payload / action.limit)}
        default:
            return state
    }
}