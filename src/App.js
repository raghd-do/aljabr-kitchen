import React from "react";
import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
// import ProtectedRoute from "./utils/ProtectedRoute";

// Store
import { userColumns } from "./app/userSlice";
import { userInputs } from "./app/userSlice";
import { billColumns } from "./app/billSlice";
import { billInputs } from "./app/billSlice";
import { productInputs } from "./app/productSlice";
import { productColumns } from "./app/productSlice";

// Views
import Home from "./views/home/Home";
import Login from "./views/auth/Login";
import List from "./views/list/List";
import Single from "./views/single/Single";
import New from "./views/new/New";
import NotFound from "./views/404/NotFound";

function App() {
  const users = useSelector((state) => state.user);
  const bills = useSelector((state) => state.bill);
  const products = useSelector((state) => state.product);

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
              <Route
                index
                element={<List rows={users} columns={userColumns} />}
              />
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
              <Route
                index
                element={<List rows={bills} columns={billColumns} />}
              />
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
              <Route
                index
                element={<List rows={products} columns={productColumns} />}
              />
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
