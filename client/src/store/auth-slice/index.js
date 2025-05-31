import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// console.log("✅ authSlice loaded");

const initialState = {
    isAuthenticated: false,
    isLoading: true,
    user: null

};
export const registerUser = createAsyncThunk('/auth/register',
    async (formData) => {
        const response = await axios.post('http://localhost:5000/api/auth/register', formData, {
            withCredentials: true
        });
        return response.data
    }
)
export const loginUser = createAsyncThunk('/auth/login',
    async (formData) => {
        const response = await axios.post(
            "http://localhost:5000/api/auth/login",
            formData,
            {
                withCredentials: true,
            }
        );

        return response.data;
    }


);
export const logOutUser = createAsyncThunk('/auth/logout',
    async () => {
        const response = await axios.post(
            "http://localhost:5000/api/auth/logout", {},

            {
                withCredentials: true,
            }
        );

        return response.data;
    }


);



export const checkAuth = createAsyncThunk('/auth/chechauth',
    async () => {
        const response = await axios.get(
            'http://localhost:5000/api/auth/check-auth',
            {
                withCredentials: true,
                headers: {
                    'Cache-Control': 'no-store, no-cache,must-revalidate,proxy-revalidate',
                    Expires: '0'
                }
            }
        );
        return response.data
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {

        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true
        }).addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload.success ? action.payload.user : null;
            state.isAuthenticated = action.payload.success;
        }).addCase(registerUser.rejected, (state, action) => {

            console.log("❌ registerUser.rejected", action.error.message);
            state.isLoading = false;
            state.user = null;
            state.isAuthenticated = false
        }).addCase(loginUser.pending, (state) => {
            console.log("🔄 loginUser.pending")
            state.isLoading = true
        }).addCase(loginUser.fulfilled, (state, action) => {
            // console.log("✅ loginUser.fulfilled", action.payload);
            console.log("🔥 User object after login:", action.payload.user);

            state.isLoading = false;
            state.user = action.payload.success ? action.payload.user : null;
            state.isAuthenticated = action.payload.success;
        }).addCase(loginUser.rejected, (state, action) => {
            console.log("❌ loginUser.rejected", action.payload || action.error.message);
            state.isLoading = false;
            state.user = null;
            state.isAuthenticated = false
        }).addCase(checkAuth.pending, (state) => {
            console.log("🔄 checkAuth user pending")
            state.isLoading = true
        }).addCase(checkAuth.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload.success ? action.payload.user : null;
            state.isAuthenticated = action.payload.success;
        }).addCase(checkAuth.rejected, (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.isAuthenticated = false
        }).addCase(logOutUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.isAuthenticated = false;
        })
    }
}

)
export const { setUser } = authSlice.actions;
export default authSlice.reducer