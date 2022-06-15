import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getStats } from "../../utils/users";
import { idToken } from "../../utils/misc";

const initialState = {
    stats: {},
    loading: true
}

export const fetchStats = createAsyncThunk(
    'stats/fetchStats',
    async() =>{
        await idToken()
        let token = "Bearer " + window.localStorage.getItem('auth_token')
        const res = await getStats(window.localStorage.getItem('uid'), token)
        return res.result.rows[0]
    }
)

const StatsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers:{

    },
    extraReducers: {
        [fetchStats.pending]: (state) =>{
            state.loading = true;
        },
        [fetchStats.fulfilled]: (state, action) =>{
            state.stats = action.payload
            state.loading = false;
        },
        [fetchStats.rejected]: (state) =>{
            state.loading = false;
        }
    }
})

export const statsSelector = state => state.loading
export default StatsSlice.reducer