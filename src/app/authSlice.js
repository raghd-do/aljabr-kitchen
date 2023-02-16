import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedIn: false,
  },
  reducers: {},
});

// export const { registerByEmail, signout, signin } = authSlice.actions;
export default authSlice.reducer;
