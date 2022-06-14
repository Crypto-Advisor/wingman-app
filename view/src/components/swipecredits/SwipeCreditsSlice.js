import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../utils/users";
import { idToken } from "../../utils/misc";

const initialState = {
    stats: {},
    loading: true,
    loaded: false
}

export const getStats = createAsyncThunk(
    'swipecredits/getStats',
    async() =>{
        await idToken()
        let token = "Bearer " + window.localStorage.getItem('auth_token')
        const res = await getUser(window.localStorage.getItem('uid'), token)
        return res.result.rows[0]
    }
)

const SwipeCreditsSlice = createSlice({
    name: 'swipecredits',
    initialState,
    reducers:{

    },
    extraReducers: {
        [getStats.pending]: (state) =>{
            state.loading = true;
        },
        [getStats.fulfilled]: (state, action) =>{
            state.stats = action.payload
            state.loading = false;
            state.loaded = true;
        },
        [getStats.rejected]: (state) =>{
            state.loading = false;
        }
    }
})

export const SwipeCreditsSelector = state => state.stats
export default SwipeCreditsSlice.reducer