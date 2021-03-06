import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserImages } from "../../utils/images";
import { idToken } from "../../utils/misc";

const initialState = {
    pictures: [],
    loading: true
}

export const getPictures = createAsyncThunk(
    'pictures/getPictures',
    async() =>{
        await idToken()
        let token = "Bearer " + window.localStorage.getItem('auth_token')
        const res = await getUserImages(window.localStorage.getItem('uid'), token)
        return res.result.rows
    }
)

const PicturesListSlice = createSlice({
    name: 'pictures',
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
        },
        [getPictures.rejected]: (state) =>{
            state.loading = false;
        }
    }
})

export const PicturesListSelector = state => state.pictures
export default PicturesListSlice.reducer