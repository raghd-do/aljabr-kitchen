import React from "react";
import "./list.scss";
// Component
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/dataTable/DataTable";

export default function List() {
  return (
    <div className="list">
      <Sidebar />
      <div className="container">
        <Navbar />
        <main className="main">
          <DataTable />
        </main>
      </div>
    </div>
  );
}
