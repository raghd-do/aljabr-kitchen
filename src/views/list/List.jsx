import React from "react";
import "./list.scss";
// Component
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/dataTable/DataTable";
// Store
import { useSelector } from "react-redux";
import { userColumns } from "../../app/userSlice";

export default function List() {
  const users = useSelector((state) => state.user);

  return (
    <div className="list">
      <Sidebar />
      <div className="container">
        <Navbar />
        <main className="main">
          <DataTable rows={users} columns={userColumns} />
        </main>
      </div>
    </div>
  );
}
