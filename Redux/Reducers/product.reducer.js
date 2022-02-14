import {
    GET_ALL_FLOWERS,
    GET_CART_FLOWERS,
    GET_NEW_FLOWERS,
    GET_SIMILAR_FLOWERS,
    REMOVE_FLOWER_IN_CART, SELECTED_PRODUCT
} from "../Action/product.action";


const initialState = {
    newProducts: null,
    allProducts: null,
    selectedProduct: null,
    similarProduct: null,
    cartProducts: []
}

export const productReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case GET_ALL_FLOWERS:
            return { ...state, allProducts: [...action.payload] }
        case GET_NEW_FLOWERS:
            return { ...state, newProducts: [...action.payload] }
        case GET_SIMILAR_FLOWERS:
            return { ...state, similarProduct: [...action.payload] }
        case GET_CART_FLOWERS:
            return {...state, cartProducts: [...action.payload]}
        case REMOVE_FLOWER_IN_CART:
            let cartProducts = state.cartProducts.filter(product => product.id !== action.payload)
            return {...state, cartProducts: [...cartProducts]}
        case SELECTED_PRODUCT:
            return {...state, selectedProduct: action.payload}
        default:
            return state
    }
}