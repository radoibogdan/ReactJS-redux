import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import counterReducer from './counter';
import authReducer from './auth';

// Merge multiple reducers into one reducer
const store = configureStore({
  reducer: { 
    counter: counterReducer, 
    auth: authReducer 
  }
});

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