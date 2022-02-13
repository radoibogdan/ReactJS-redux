import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter : 0, showCounter: true };
// createSlice - prepares our global state slice
// creates action ids for every reducer
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
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

// Export Actions (used for dispatching)
export const counterActions = counterSlice.actions; 

// Export only the reducer as default
export default counterSlice.reducer;