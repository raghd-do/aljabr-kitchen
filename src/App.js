import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./utils/ProtectedRoute";
// Views
import Auth from "./views/auth/Auth";
import Login from "./views/auth/Login";
import SignUp from "./views/auth/SignUp";
import Dashboard from "./views/Dashboard";

import NotFound from "./views/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Auth />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
