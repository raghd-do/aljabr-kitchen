import React from "react";
import "./app.scss";
import "./style/dark.scss";
// ROUUTE
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";

// Store
import { useSelector } from "react-redux";
import { userColumns } from "./app/user/userSlice";
import { userInputs } from "./app/user/userSlice";
import { billColumns } from "./app/billSlice";
import { billInputs } from "./app/billSlice";
import { productInputs } from "./app/productSlice";
import { productColumns } from "./app/productSlice";

// API
import { useGetUsersQuery } from "./app/user/UserApi";

// Views
import Home from "./views/home/Home";
import Auth from "./views/auth/Auth";
import Login from "./views/auth/Login";
import SignUp from "./views/auth/SignUp";
import List from "./views/list/List";
import Single from "./views/single/Single";
import New from "./views/new/New";
import NotFound from "./views/404/NotFound";

function App() {
  const { data: users, isLoading } = useGetUsersQuery();
  const bills = useSelector((state) => state.bill);
  const products = useSelector((state) => state.product);
  const theme = useSelector((state) => state.theme.t);

  return (
    <div className={`app ${theme}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {/* AUTH */}
            <Route path="/login">
              <Route element={<Auth />}>
                <Route index element={<Login />} />
                <Route path="new" element={<SignUp />} />
              </Route>
            </Route>

            {/* HOME */}
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            {/* USER */}
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List
                      rows={users}
                      columns={userColumns}
                      isLoading={isLoading}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New title={"إضافة مستخدم جديد"} inputs={userInputs} />
                  </ProtectedRoute>
                }
              />
            </Route>

            {/* BILLS */}
            <Route path="bills">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List
                      rows={bills}
                      columns={billColumns}
                      isLoading={isLoading}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":billId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New title={"إضافة فاتورة جديد"} inputs={billInputs} />
                  </ProtectedRoute>
                }
              />
            </Route>

            {/* PRODUCTS */}
            <Route path="products">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List
                      rows={products}
                      columns={productColumns}
                      isLoading={isLoading}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productID"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New title={"إضافة منتج جديد"} inputs={productInputs} />
                  </ProtectedRoute>
                }
              />
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
