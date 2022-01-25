import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const sendCustomerMessage = createAsyncThunk(
    'common/sendCustomerMessage',
    async (payload, {rejectedWithValue}) => {
        try {
            console.log(payload,'<------------CustomerMessage')// TODO clear
            return 'ok'
        } catch (error) {
            return rejectedWithValue(error)
        }
    }
)
const commonReducer = createSlice({
    name: 'common',
    initialState: {
        loading: false,
    },
    reducers: {
        changeLoading: (state, action) => {
            state.loading = action.payload
        }
    },
    extraReducers: {
        [sendCustomerMessage.pending]: (state,action) => {
            // console.log(action,'<--------------------action.pending')//TODO clear
            state.loading = true
        },
        [sendCustomerMessage.fulfilled]: (state,action) => {
            console.log(action,'<--------------------action.fulfilled')
            state.loading = false
        },
        [sendCustomerMessage.rejected]: (state,action) => {
            // console.log(action,'<--------------------action.rejected')//TODO clear

        }
    }
})

export const {changeLoading} = commonReducer.actions
export default commonReducer.reducer
