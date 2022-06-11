import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser } from "../../utils/users";

const initialState = {
    login: {},
    loggedIn: false,
    loading: true,
}

export const loginThunk = createAsyncThunk(
    'login/login',
    async(data) =>{
        const res = await createUser(data)
        console.log(res)
    }
)

const LoginPopupSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{

    },
    extraReducers: {
        [loginThunk.pending]: (state) =>{
            state.loading = true;
        },
        [loginThunk.fulfilled]: (state, action) =>{
            state.loading = false;
            state.loggedIn = true;
        },
        [loginThunk.rejected]: (state) =>{
            state.loading = false;
            state.loggedIn = false;
        }
    }
})

export const loginSelector = state => state.login
export default LoginPopupSlice.reducer