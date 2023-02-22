import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user") || null),
    in: false,
  },
  reducers: {
    authIn: (state, action) => {
      state.user = action.payload;
      state.in = true;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    authOut: (state, action) => {
      state.user = null;
      state.in = false;
      // TODO: meke sure it is removerd correctly from locale storage
      localStorage.removeItem("user");
    },
  },
});

export const { authIn, authOut } = authSlice.actions;
export default authSlice.reducer;
