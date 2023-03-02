import React from "react";
import "./list.scss";
// Component
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/dataTable/DataTable";
// TODO: Skeleton MUI to demonistrate the loading prosess

export default function List({ type, rows, columns, isLoading }) {
  return (
    <div className="list">
      <Sidebar />
      <div className="container">
        <Navbar />
        <main className="main">
          <DataTable
            type={type}
            rows={rows}
            columns={columns}
            isLoading={isLoading}
          />
        </main>
      </div>
    </div>
  );
}
