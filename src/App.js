import React from "react";
import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./utils/ProtectedRoute";

// Store
import { userInputs } from "./app/userSlice";
import { productInputs } from "./app/productSlice";
import { billInputs } from "./app/billSlice";

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
            <Route index element={<Home />} />

            {/* AUTH */}
            <Route path="login" element={<Login />} />

            {/* USER */}
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={
                  <New title={"إضافة مستخدم جديد"} inputs={userInputs} />
                }
              />
            </Route>

            {/* BILLS */}
            <Route path="bills">
              <Route index element={<List />} />
              <Route path=":billId" element={<Single />} />
              <Route
                path="new"
                element={
                  <New title={"إضافة فاتورة جديد"} inputs={billInputs} />
                }
              />
            </Route>

            {/* PRODUCTS */}
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productID" element={<Single />} />
              <Route
                path="new"
                element={
                  <New title={"إضافة منتج جديد"} inputs={productInputs} />
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
