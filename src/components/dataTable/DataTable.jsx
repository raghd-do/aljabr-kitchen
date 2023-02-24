import React from "react";
import "./dataTable.scss";
// ROUTE
import { Link } from "react-router-dom";
// MUI
import { DataGrid } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";

export default function DataTable({ rows, columns, isLoading }) {
  const actionColumn = [
    {
      field: "action",
      headerName: "إجراء",
      width: 200,
      renderCell: () => (
        <div className="cellAction">
          <Link to="/users/123">
            <div className="view">عرض</div>
          </Link>
          <div className="delete">حذف</div>
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
