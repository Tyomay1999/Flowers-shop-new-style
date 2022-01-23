import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { newProducts, similarProducts } from "../../Components/newProducts/config";

export  const getNewProductsThunk = createAsyncThunk(
    'product/getNewProductsThunk',
    async (_,{rejectedWithValue}) => {
        try {
            return newProducts
        } catch ( error ) {
            rejectedWithValue(error)
        }
}
)
export const getSimilarProductThunk = createAsyncThunk(
    'product/getSimilarProductThunk',
    async (_,{rejectWithValue}) => {
        // const response = await fetch('url')
        try {

            return similarProducts
        } catch ( error ) {
            throw rejectWithValue(error.message)
        }
    }
)

const productReducer = createSlice( {
    name: 'product',
    initialState: {
        newProducts: null,
        selectedProduct: null,
        similarProduct: null,
        status: null,
        error: null
    },
    reducers: {
        selectProduct: ( state, action ) => {
            state.selectedProduct = action.payload
        },
        similarProduct: ( state, action ) => {
            state.similarProduct = action.payload
        }
    },
    extraReducers: {
        [ getSimilarProductThunk.pending ]: ( state ) => {
            state.status = 'loading';
            state.error = null
        },
        [ getSimilarProductThunk.fulfilled ]: ( state, action ) => {
            state.status = 'resolved';
            state.similarProduct = action.payload;
        },
        [ getSimilarProductThunk.rejected ]: ( state, action ) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [ getNewProductsThunk.pending ]: ( state ) => {
            state.status = 'loading';
            state.error = null
        },
        [ getNewProductsThunk.fulfilled ]: ( state, action ) => {
            state.status = 'resolved';
            state.newProducts = action.payload;
        },
        [ getNewProductsThunk.rejected ]: ( state, action ) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    }
} )

export const { selectProduct } = productReducer.actions
export default productReducer.reducer