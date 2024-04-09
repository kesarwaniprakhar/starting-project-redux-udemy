import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: "counter",
    initialState : {
        value: 0,
        toggleCounter: true
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        addNumber: (state, action) => {
            state.value += action.payload
        },
        toggleCounter: (state) => {
            state.toggleCounter = !state.toggleCounter
        }
    }
})

export const { increment, decrement, addNumber, toggleCounter } = counterSlice.actions

export default counterSlice.reducer

