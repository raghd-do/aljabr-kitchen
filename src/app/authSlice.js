import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    in: false,
  },
  reducers: {
    authIn: (state, action) => {
      state.in = true;
    },
    authOut: (state, action) => {
      state.in = false;
    },
  },
});

export const { authIn, authOut } = authSlice.actions;
export default authSlice.reducer;
