import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.auth);
  let location = useLocation();

  console.log("from protected route: ", user);

  if (!user.loggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}
