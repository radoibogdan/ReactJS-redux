import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false }
// createSlice - prepares our global state slice
// creates action ids for every reducer
const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});

// Export Actions (used for dispatching)
export const authActions = authSlice.actions;

// Export only the reducer as default
export default authSlice.reducer;