import { allProducts, newProducts } from "../../Components/newProducts/config";

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
export const changeProductQuantity = (quantity,position) => {
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
    return{
        type: GET_SIMILAR_FLOWERS,
        payload
    }
}
export const getAllFlowersThunk = () => async dispatch => {
    try {
        // const data = await
    } catch ( error ) {
        console.log(error)
        throw error
    }
}

export const getNewFlowersThunk = () => async dispatch => {
    try {
        //
        return dispatch(setNewFlowers(newProducts))
    } catch ( error ) {
        console.log(error)
        throw error
    }
}

export const getCartProductsThunk = payload => async dispatch => {
    try {
        const falseArray = []
        const cartProducts = JSON.parse(payload)
        await allProducts.forEach((flower, index) => {
            cartProducts.forEach(cartFlowerId => {
                if (cartFlowerId === flower.id) {
                    falseArray.push( { ...flower, quantity: 1 })
                }
            })
        })
        return dispatch(setCartData(falseArray))
    } catch ( error ) {
        console.log(error)
        throw error
    }
}

export const getSimilarProductThunk = payload => async dispatch => {
    try {
        //
        return dispatch(similarProduct(payload))
    } catch ( error ) {
        console.log(error)
        throw error
    }
}