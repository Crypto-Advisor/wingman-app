import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createImages } from "../../utils/images";

const initialState = {
    loading: true
}

export const uploadImage = createAsyncThunk(
    'photos/uploadImage',
    async({uuid, url}) =>{
        console.log(url)
        let token = "Bearer " + window.localStorage.getItem('auth_token')
        const res = await createImages(uuid, window.localStorage.getItem('uid'), url, token)
        console.log(res)
    }
)

const SelectPhotosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers:{

    },
    extraReducers: {
        [uploadImage.pending]: (state) =>{
            state.loading = true;
        },
        [uploadImage.fulfilled]: (state, action) =>{
            state.loading = false;
        },
        [uploadImage.rejected]: (state) =>{
            state.loading = false;
        }
    }
})

export const selectPhotoSelector = state => state.loading
export default SelectPhotosSlice.reducer