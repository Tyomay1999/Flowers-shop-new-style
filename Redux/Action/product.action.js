import { allProducts, newProducts } from "../../Components/newProducts/config";
import { fetchingDataWithAxiosMiddleware } from "./common.action";
import {
    ALL_FLOWERS_URL,
    GET_CART_FLOWERS_URL,
    GET_NEW_FLOWERS_URL,
    GET_SIMILAR_PRODUCT
} from "../../pages/api/sampleApi";

export const GET_ALL_FLOWERS = 'GET ALL FLOWERS'
export const GET_SIMILAR_FLOWERS = 'GET SIMILAR FLOWERS'
export const GET_NEW_FLOWERS = 'GET NEW FLOWERS'
export const GET_CART_FLOWERS = 'GET CART FLOWERS'
export const REMOVE_FLOWER_IN_CART = 'REMOVE FLOWER IN CART'
export const SELECTED_PRODUCT = 'SELECTED PRODUCT'
export const CHANGE_PRODUCT_QUANTITY = 'CHANGE PRODUCT QUANTITY'

const setAllFlowers = payload => {
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
export const getAllFlowersThunk = () => async dispatch => {
    try {
        const response = await fetchingDataWithAxiosMiddleware( "GET", ALL_FLOWERS_URL )
        if ( response.status ) {
            console.log( response.data )
            await dispatch( setAllFlowers( response.data?.flowers ) )
        }
    } catch ( error ) {
        console.log( error )
        throw error
    }
}

export const getNewFlowersThunk = () => async dispatch => {
    try {
        const response = await fetchingDataWithAxiosMiddleware( "GET", GET_NEW_FLOWERS_URL )
        if ( response.status ) {
            return dispatch( setNewFlowers( response.data.newFlowers ) )
        }
    } catch ( error ) {
        console.log( error )
        throw error
    }
}

export const getCartProductsThunk = payload => async dispatch => {
    try {
        const falseArray = []
        const cartProducts = JSON.parse( payload )
        await allProducts.forEach( ( flower, index ) => {
            cartProducts.forEach( cartFlowerId => {
                if ( cartFlowerId === flower.id ) {
                    falseArray.push( { ...flower, quantity: 1 } )
                }
            } )
        } )
        const fd = new FormData()
        fd.append("flowerIds", JSON.stringify(payload))
        const response = await fetchingDataWithAxiosMiddleware("POST",GET_CART_FLOWERS_URL,fd)
        if(response.status){
            console.log(response.data.flowers)
        }
        return dispatch( setCartData( falseArray ) )
    } catch ( error ) {
        console.log( error )
        throw error
    }
}

export const getSimilarProductThunk = payload => async dispatch => {
    try {
        const fd = new FormData()
        fd.append( "categories", JSON.stringify( payload ) )
        const response = await fetchingDataWithAxiosMiddleware( "POST", GET_SIMILAR_PRODUCT, fd )
        console.log( response )
        if ( response.status ) {
            return dispatch( similarProduct( response.data.similarFlowers ) )
        }
    } catch ( error ) {
        console.log( error )
        throw error
    }
}