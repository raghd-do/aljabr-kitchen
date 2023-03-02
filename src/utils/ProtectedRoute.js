import React from "react";
import { auth } from "../config/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  let location = useLocation();

  // checking auth from firebase
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  });
  return children;
}
