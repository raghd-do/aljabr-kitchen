import React from "react";
import "./home.scss";

// Components
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";

export default function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <main className="widgets">
          <Widget type="الأعضاء" />
          <Widget type="المشتريات" />
          <Widget type="الدخل الشهري" />
          <Widget type="المتبقي في البنك" />
        </main>
      </div>
    </div>
  );
}
