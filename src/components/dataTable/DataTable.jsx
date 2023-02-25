import React from "react";
import "./dataTable.scss";
// ROUTE
import { Link, useLocation } from "react-router-dom";
// MUI
import { DataGrid } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
// API
import { useDeleteUserMutation } from "../../api/userApi";

export default function DataTable({ rows, columns, isLoading }) {
  // HOCKS
  const location = useLocation();
  const { deleteUser } = useDeleteUserMutation();

  const handleDelete = (id) => {
    switch (location.pathname) {
      case "/users":
        deleteUser(id);
        break;
      case "/bills":
        break;
      case "/products":
        break;
      default:
        break;
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "إجراء",
      width: 200,
      renderCell: (params) => (
        <div className="cellAction">
          <Link to="/users/123">
            <div className="view">عرض</div>
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            حذف
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="dataTable">
      <div className="title">
        إضافة جديد
        <Link to="/users/new">إضافة جديد</Link>
      </div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <DataGrid
          rows={rows}
          columns={columns.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[9]}
          checkboxSelection
          className="dataGrid"
        />
      )}
    </div>
  );
}
