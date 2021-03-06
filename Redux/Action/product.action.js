import {
    changePage,
    fetchingDataWithAxiosMiddleware,
    setLoading,
    setMessage,
    setPagesData
} from "./common.action";
import {
    ALL_CATEGORIES_URL,
    ALL_FLOWERS_URL, GET_ALL_FLOWERS_URL,
    GET_CART_FLOWERS_URL,
    GET_NEW_FLOWERS_URL, GET_PRODUCTS_BY_SEARCH,
    GET_SIMILAR_PRODUCT, SET_ORDER
} from "../../pages/api/sampleApi";
import { data_limits, messages, minMaxPrice } from "../../Components/Common/web-site-static-words";

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

export const getCategoriesThunk = () => async dispatch => {
    try {
        await dispatch( setLoading( true ) )
        const response = await fetchingDataWithAxiosMiddleware( "GET", ALL_CATEGORIES_URL )
        if ( response.status ) {
            await dispatch( setCategories( response.data.categories ) )
            await dispatch( setLoading( false ) )
        }
    } catch ( error ) {
        dispatch( setMessage( messages.network_connection ) )
        await dispatch( setLoading( false ) )
        throw error
    }
}

export const getNewFlowersThunk = (page = 1 ) => async dispatch => {
    try {
        const limit = data_limits.new_product_limit
        const filters = {
            page,
            limit
        }
        await dispatch( setLoading( true ) )
        const response = await fetchingDataWithAxiosMiddleware( "POST", GET_NEW_FLOWERS_URL, JSON.stringify(filters) )
        if ( response.status ) {
            dispatch(setPagesData(response.data.count, limit))
            dispatch( setNewFlowers( response.data.flowers ) )
            dispatch( setLoading( false ) )
        }
    } catch ( error ) {
        dispatch(setMessage(messages.network_connection))
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
        dispatch(setMessage(messages.network_connection))
        await dispatch( setLoading( false ) )
        throw error
    }
}

export const getSimilarProductThunk = (payload,page = 1) => async dispatch => {
    try {
        const fd = new FormData()
        const limit = data_limits.similar_product_limit
        fd.append( "categories", JSON.stringify( payload ) )
        fd.append("limit", `${limit}`)
        fd.append("page", `${page}`)
        const response = await fetchingDataWithAxiosMiddleware( "POST", GET_SIMILAR_PRODUCT, fd )
        if ( response.status ) {
            dispatch(setPagesData(response.data.count, limit))
            return dispatch( similarProduct( response.data.similarFlowers ) )
        }
    } catch ( error ) {
        dispatch(setMessage(messages.network_connection))
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
        if ( response.status ) {
            dispatch(setMessage(messages.order_confirmed))
        }
    } catch ( error ) {
        dispatch(setMessage(messages.network_connection))
        throw error
    }
}

export const getAllProductsThunk = (page = 1, category_id = 0, prices = [minMaxPrice.min, minMaxPrice.max]) => {
    return async dispatch => {
        try {
            const limit = data_limits.all_product_limit
            dispatch(setLoading(true))
            const filters = JSON.stringify({
                category_id,
                prices,
                limit,
                page
            })
            const response = await fetchingDataWithAxiosMiddleware("POST", GET_ALL_FLOWERS_URL, filters)
            if (response.status) {
                dispatch(setPagesData(response.data.count, limit))
                dispatch(setAllFlowers(response.data.flowers))
                dispatch(setLoading(false))
            }
        } catch (error) {
            await dispatch(setMessage(error.message))
            throw error
        }
    }
}
export const getProductBySearchThunk = payload =>  async dispatch => {
    try {
        const fd = new FormData()
        fd.append("name", payload)
        const response = await fetchingDataWithAxiosMiddleware("POST", GET_PRODUCTS_BY_SEARCH, fd)
        if (response.status) {
            dispatch(setPagesData(response.data.count, data_limits.searched_product_limit))
            dispatch(setAllFlowers(response.data.flowers))
            dispatch(setLoading(false))
        }
    } catch (error) {
        await dispatch(setMessage(error.message))
        throw error
    }
}
