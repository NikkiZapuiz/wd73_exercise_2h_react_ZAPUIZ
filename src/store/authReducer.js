import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        loginSuccess: (state, action) => {
            return action.payload
        },
        logoutSuccess: () => {
            return null
        }
    }
})

export const { loginSuccess, logoutSuccess } = userSlice.actions