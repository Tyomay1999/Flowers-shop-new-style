import {createSlice} from '@reduxjs/toolkit'

const commonReducer = createSlice({
    name: 'common',
    initialState: {
        loading: false
    },
    reducers: {
        changeLoading: (state,action) => {
            state.loading = action.payload
        }
    }
})

export const {changeLoading} = commonReducer.actions
export default commonReducer.reducer
