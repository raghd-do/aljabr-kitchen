import React from "react";
import "./notFound.scss";
// Component
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

export default function NotFound() {
  return (
    <div className="notFound">
      <Sidebar />
      <div className="container">
        <Navbar />
        <main>
          <h1>عذرا !</h1>
          <p>الصفحة غير موجودة</p>
        </main>
      </div>
    </div>
  );
}
