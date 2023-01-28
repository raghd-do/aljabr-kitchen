import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.auth);
  let location = useLocation();

  console.log(user);

  if (!user.logged) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}
