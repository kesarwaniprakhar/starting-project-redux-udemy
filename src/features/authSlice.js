import { createSlice } from '@reduxjs/toolkit'


const authslice = createSlice({
    name: 'authentication',
    initialState: {
        isAuthenticated: false
    },
    reducers: {
        login: (state) => {
            state.isAuthenticated = !state.isAuthenticated
        },
        logout: (state) => {
            state.isAuthenticated = !state.isAuthenticated
        }
    }
})

export const authActions = authslice.actions

export default authslice