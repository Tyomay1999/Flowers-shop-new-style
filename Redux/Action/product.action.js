import { allProducts, newProducts } from "../../Components/newProducts/config";
import { CHOOSE_NETWORK_CONNECTION, fetchingDataWithAxiosMiddleware, setLoading, setMessage } from "./common.action";
import {
    ALL_CATEGORIES_URL,
    ALL_FLOWERS_URL,
    GET_CART_FLOWERS_URL,
    GET_NEW_FLOWERS_URL,
    GET_SIMILAR_PRODUCT, SET_ORDER
} from "../../pages/api/sampleApi";

export const GET_ALL_FLOWERS = 'GET ALL FLOWERS'
export const GET_SIMILAR_FLOWERS = 'GET SIMILAR FLOWERS'
export const SET_CATEGORIES = 'SET CATEGORIES'
export const GET_NEW_FLOWERS = 'GET NEW FLOWERS'
export const GET_CART_FLOWERS = 'GET CART FLOWERS'
export const REMOVE_FLOWER_IN_CART = 'REMOVE FLOWER IN CART'
export const SELECTED_PRODUCT = 'SELECTED PRODUCT'
export const CHANGE_PRODUCT_QUANTITY = 'CHANGE PRODUCT QUANTITY'


export const setAllFlowers = payload => {
    return {
        type: GET_ALL_FLOWERS,
        payload
    }
}
export const changeProductQuantity = ( quantity, position ) => {
    return {
        type: CHANGE_PRODUCT_QUANTITY,
        quantity,
        position
    }
}
const setNewFlowers = payload => {
    return {
        type: GET_NEW_FLOWERS,
        payload
    }
}
export const selectProduct = payload => {
    return {
        type: SELECTED_PRODUCT,
        payload
    }
}
const setCartData = payload => {
    return {
        type: GET_CART_FLOWERS,
        payload
    }
}

export const removeFlowerInCart = payload => {
    return {
        type: REMOVE_FLOWER_IN_CART,
        payload
    }
}
const similarProduct = payload => {
    return {
        type: GET_SIMILAR_FLOWERS,
        payload
    }
}

const setCategories = payload => {
    return {
        type: SET_CATEGORIES,
        payload
    }
}

export const getProductByCategory = payload => async dispatch => {
    try {
        await dispatch( setLoading( true ) )
        const fd = new FormData()
        fd.append( "flower_ids", JSON.stringify( payload.flower_ids ) )
        const response = await fetchingDataWithAxiosMiddleware( "POST", ALL_FLOWERS_URL, fd )
        if ( response.status ) {
            dispatch( setAllFlowers( response.data?.flowers ) )
            dispatch( setMessage( payload.name ) )
            dispatch( setLoading( false ) )
        }
    } catch ( error ) {
        dispatch( setLoading( false ) )
        dispatch( setMessage( CHOOSE_NETWORK_CONNECTION ) )
        throw error
    }
}

export const getCategoriesThunk = () => async dispatch => {
    try {
        await dispatch( setLoading( true ) )
        const response = await fetchingDataWithAxiosMiddleware( "GET", ALL_CATEGORIES_URL )
        if ( response.status ) {
            await dispatch( setCategories( response.data.categories ) )
            await dispatch( setLoading( false ) )
        }
    } catch ( error ) {
        dispatch( setMessage( CHOOSE_NETWORK_CONNECTION ) )
        await dispatch( setLoading( false ) )
        throw error
    }
}

export const getNewFlowersThunk = () => async dispatch => {
    try {
        await dispatch( setLoading( true ) )
        const response = await fetchingDataWithAxiosMiddleware( "GET", GET_NEW_FLOWERS_URL )
        if ( response.status ) {
            dispatch( setNewFlowers( response.data.newFlowers ) )
            await dispatch( setLoading( false ) )

        }
    } catch ( error ) {
        dispatch(setMessage(CHOOSE_NETWORK_CONNECTION))
        await dispatch( setLoading( false ) )
        throw error
    }
}

export const getCartProductsThunk = payload => async dispatch => {
    try {
        await dispatch( setLoading( true ) )
        const fd = new FormData()
        fd.append( "flowerIds", payload )
        const response = await fetchingDataWithAxiosMiddleware( "POST", GET_CART_FLOWERS_URL, fd )
        if ( response.status ) {
            response.data.flowers.map( product => product.quantity = 1 )
            dispatch( setCartData( response.data.flowers ) )
            await dispatch( setLoading( false ) )
        }
    } catch ( error ) {
        dispatch(setMessage(CHOOSE_NETWORK_CONNECTION))
        await dispatch( setLoading( false ) )
        throw error
    }
}

export const getSimilarProductThunk = payload => async dispatch => {
    try {
        const fd = new FormData()
        fd.append( "categories", JSON.stringify( payload ) )
        const response = await fetchingDataWithAxiosMiddleware( "POST", GET_SIMILAR_PRODUCT, fd )
        if ( response.status ) {
            return dispatch( similarProduct( response.data.similarFlowers ) )
        }
    } catch ( error ) {
        dispatch(setMessage(CHOOSE_NETWORK_CONNECTION))
        throw error
    }
}

export const sendOrderThunk = ( shippingDetails, orderDetails, paymentDetails ) => async dispatch => {
    try {
        const fd = new FormData()
        fd.append( "shippingDetails", JSON.stringify( shippingDetails ) )
        fd.append( "orderDetails", JSON.stringify( orderDetails ) )
        fd.append( "paymentDetails", JSON.stringify( paymentDetails ) )
        const response = await fetchingDataWithAxiosMiddleware( "POST", SET_ORDER, fd )
        // console.log( response.data )
        if ( response.status ) {
            // return dispatch( similarProduct( response.data.similarFlowers ) )
        }
    } catch ( error ) {
        dispatch(setMessage(CHOOSE_NETWORK_CONNECTION))
        throw error
    }
}