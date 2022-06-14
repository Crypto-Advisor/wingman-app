import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getImages } from "../../utils/images";
import { idToken } from "../../utils/misc";

const initialState = {
    pictures: [],
    loading: true,
    loaded: false
}

export const getPictures = createAsyncThunk(
    'swipebox/getPictures',
    async() =>{
        await idToken()
        let token = "Bearer " + window.localStorage.getItem('auth_token')
        const res = await getImages(token)
        return res.result.rows
    }
)

const SwipeboxSlice = createSlice({
    name: 'swipebox',
    initialState,
    reducers:{

    },
    extraReducers: {
        [getPictures.pending]: (state) =>{
            state.loading = true;
        },
        [getPictures.fulfilled]: (state, action) =>{
            state.pictures = action.payload
            state.loading = false;
            state.loaded = true;
        },
        [getPictures.rejected]: (state) =>{
            state.loading = false;
        }
    }
})

export const SwipeboxSelector = state => state.pictures
export default SwipeboxSlice.reducer