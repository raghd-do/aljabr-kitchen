import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
  name: "auth",
  initialState: {},
  reducers: {},
});

// export { } = authSlice.actions;
export const selectAuth = (state) => state.auth;
