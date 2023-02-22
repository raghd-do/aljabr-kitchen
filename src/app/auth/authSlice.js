import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    in: JSON.parse(localStorage.getItem("user") || false),
  },
  reducers: {
    authIn: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", true);
    },
    authOut: (state, action) => {
      state.user = null;
      // TODO: meke sure it is removerd correctly from locale storage
      localStorage.removeItem("user");
    },
  },
});

export const { authIn, authOut } = authSlice.actions;
export default authSlice.reducer;
