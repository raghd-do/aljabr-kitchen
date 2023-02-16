import React from "react";
import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./utils/ProtectedRoute";

// Views
import Home from "./views/home/Home";
import Login from "./views/auth/Login";
import List from "./views/list/List";
import Single from "./views/single/Single";
import New from "./views/new/New";
import NotFound from "./views/404/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {/* GAUST */}
            <Route index path="home" element={<Home />} />

            {/* AUTH */}
            <Route path="login" element={<Login />} />

            {/* USER */}
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>

            {/* BUDGET */}
            <Route path="budgets">
              <Route index element={<List />} />
              <Route path=":budgetId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
