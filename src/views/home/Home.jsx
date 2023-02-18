import React from "react";
import "./home.scss";

// Components
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import PieChart from "../../components/pieChart/PieChart";
import LineChart from "../../components/lineChart/LineChart";
import ListTable from "../../components/table/ListTable";

export default function Home() {
  return (
    <div className="home">
      <Sidebar />
      <main className="container">
        <Navbar />
        <div className="widgets">
          <Widget type="الأعضاء" />
          <Widget type="المشتريات" />
          <Widget type="الدخل الشهري" />
          <Widget type="المتبقي في البنك" />
        </div>
        <div className="charts">
          <PieChart />
          <LineChart />
        </div>
        <div className="listContainer">
          <div className="title">جدول المصروفات</div>
          <ListTable />
        </div>
      </main>
    </div>
  );
}
