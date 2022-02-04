import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createStore } from 'redux';

const initialState = { counter : 0, showCounter: true };

// createSlice - prepares our global state slice
// creates action ids for every reducer
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      // it seems we are changing state directly(which is forbidden) but it's just a copy
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

// Merge multiple reducers into one reducer
const store = configureStore({
  reducer: counterSlice.reducer
});

// Export Actions
export const counterActions = counterSlice.actions; 

// Export Store
export default store;


// REDUX - w/o Redux Toolkit
// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter : state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter : state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     }
//   }

//   if (action.type === 'toggle') {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter
//     }
//   }

//   return state;
// };
// const store = createStore(counterReducer);