import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../config/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    logged: false,
  },
  reducers: {
    registerByEmail(state, action) {
      createUserWithEmailAndPassword(
        auth,
        action.payload.email,
        action.payload.password
      )
        .then((cred) => {
          console.log("user created: " + cred.user.email);
          state = { user: cred.user, logged: true };
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    signin(state, action) {
      signInWithEmailAndPassword(
        auth,
        action.payload.email,
        action.payload.password
      )
        .then((cred) => {
          console.log(cred.user);
          state = { user: cred.user, logged: true };
          console.log(state);
          action.payload.navigate("/dashboard");
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    signout(state, action) {
      signOut(auth)
        .then(() => {
          console.log("signed out");
          state = {
            logged: false,
          };
          action.payload.navigate("/");
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
});

export const { registerByEmail, signout, signin } = authSlice.actions;
export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
