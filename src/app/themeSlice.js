import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    toggleTheme(state) {
      if (state === "light") {
        state = "dark";
      } else {
        state = "light";
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectTheme = (state) => state.theme;
export default themeSlice.reducer;
