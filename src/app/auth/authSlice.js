import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user") || null),
    in: JSON.parse(localStorage.getItem("userIN") || false),
  },
  reducers: {
    authIn: (state, action) => {
      state.user = action.payload;
      state.in = true;
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("userIN", JSON.stringify(state.in));
    },
    authOut: (state, action) => {
      state.user = null;
      state.in = false;
      // TODO: meke sure it is removerd correctly from locale storage
      localStorage.removeItem("user");
      localStorage.removeItem("userIN");
    },
  },
});

export const { authIn, authOut } = authSlice.actions;
export default authSlice.reducer;
