import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getImages, updateImages } from "../../utils/images";
import { idToken } from "../../utils/misc";
import { updateUser } from "../../utils/users";

const initialState = {
    pictures: [],
    loading: true,
    loaded: false,
    updateStats: false
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

export const updateStats = createAsyncThunk(
    'swipebox/updateStats',
    async({new_weight, new_total, new_viewing}) =>{
        console.log(new_viewing)
        await idToken()
        let token = "Bearer " + window.localStorage.getItem('auth_token')
        let user_id = window.localStorage.getItem('uid')
        const res = await updateUser(user_id, new_weight, new_total, new_viewing, token)
        console.log(res)
    }
)

export const updateImage = createAsyncThunk(
    'swipebox/updateImage',
    async({id, likes, view_weight}) =>{
        await idToken()
        let token = "Bearer " + window.localStorage.getItem('auth_token')
        const res = await updateImages(id, likes, 0, view_weight, token)
        console.log(res)
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
        },
        [updateStats.pending]: (state) =>{
            state.updateStats = false;
        },
        [updateStats.fulfilled]: (state, action) =>{
            state.updateStats = true;
        },
        [updateStats.rejected]: (state) =>{
            state.updateStats = false;
        },
    }
})

export const SwipeboxSelector = state => state.pictures
export default SwipeboxSlice.reducer