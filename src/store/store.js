// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from "../features/counterSlice.js"
import authslice from '../features/authSlice.js';

// const initialState = {
//     counter: 0,
//     toggleCounter: true
// }

// const counterReducer = (state = initialState, action) => {
//     switch(action.type){
//         case 'counter/increment':
//             return {...state, counter: state.counter + 1}
//         case 'counter/decrement':
//             return {...state, counter: state.counter - 1}
//         case 'counter/addNumber':
//             return {...state, counter: state.counter + action.payload}
//         case 'counter/toggle':
//             return {...state, toggleCounter: !state.toggleCounter}    
//         default: 
//             return state            
//     }
// }

// const store = configureStore({
//     reducer: counterSlice
// })

const store = configureStore({
    reducer: {
        counter: counterSlice,
        auth: authslice.reducer
    }
})
console.log("store", store.getState())

export default store; 