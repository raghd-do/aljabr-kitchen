import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    t: "",
  },
  reducers: {
    toDark: (state) => {
      console.log(state);
      state.t = "dark";
    },
    toLight: (state) => {
      console.log(state);
      state.t = "";
    },
    tuggleTheme: (state) => {
      state.t = state.t === "" ? "dark" : "";
    },
  },
});

export const { toDark, toLight, tuggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
