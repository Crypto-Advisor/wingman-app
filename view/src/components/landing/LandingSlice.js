import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    landing: {},
    loading: false
}

const LandingSlice = createSlice({
    name: 'landing',
    initialState,
    reducers:{

    },
    extraReducers: {
       
    }
})

export const landingSelector = state => state.landing
export default LandingSlice.reducer