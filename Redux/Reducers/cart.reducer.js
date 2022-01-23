import {createSlice} from '@reduxjs/toolkit'

const cartReducer = createSlice({
    name: 'cart',
    initialState: {
        cartProducts: []
    },
    reducers: {
        addProduct: (state, action) => {
            state.cartProducts.push(action.payload)
        },
        removeProduct: (state, action) => {
            console.log(state.cartProducts.filter(product => product.id !== action.payload), action.payload)
            state.cartProducts = state.cartProducts.filter(product => product.id !== action.payload)
        }
    }
})

export const {addProduct,removeProduct} = cartReducer.actions
export default cartReducer.reducer