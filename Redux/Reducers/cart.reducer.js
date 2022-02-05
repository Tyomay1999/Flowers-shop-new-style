import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {allProducts} from "../../Components/newProducts/config";

export const getCartProductsThunk = createAsyncThunk(
    'cart/getCartProductsThunk',
    async (payload, {rejectedWithValue}) => {
        try {
            const falseArray = []
            const cartProducts = JSON.parse(payload)
            await allProducts.forEach((flower, index) => {
                cartProducts.forEach(cartFlowerId => {
                    if (cartFlowerId === flower.id) {
                        falseArray.push(flower)
                    }
                })
            })
            return falseArray
        } catch (error) {
            return rejectedWithValue(error)
        }
    }
)
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
    },
    extraReducers: {
        [getCartProductsThunk.pending]: (state) => {
            state.status = 'loading';
            state.error = null
        },
        [getCartProductsThunk.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.cartProducts = action.payload;
        },
        [getCartProductsThunk.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    }
})

export const {addProduct, removeProduct} = cartReducer.actions
export default cartReducer.reducer