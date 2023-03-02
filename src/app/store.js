import { configureStore } from "@reduxjs/toolkit";
// SLICE
import authReducer from "./auth/authSlice";
import userReducer from "./user/userSlice";
import productReducer from "./productSlice";
import billReducer from "./billSlice";
import themeReducer from "./themeSlice";
// API
import { userApi } from "../api/userApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    product: productReducer,
    bill: billReducer,
    theme: themeReducer,

    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch);
