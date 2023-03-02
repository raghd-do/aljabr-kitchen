import React from "react";
import "./dataTable.scss";
// ROUTE
import { Link } from "react-router-dom";
// MUI
import { DataGrid } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
// API
import { useDeleteUserMutation } from "../../api/userApi";

export default function DataTable({ type, rows, columns, isLoading }) {
  // HOCKS
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = (id) => {
    switch (type) {
      case "users":
        deleteUser(1);
        console.log("deleting user is admin bussines :)");
        break;
      case "bills":
        break;
      case "products":
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
          <Link to={`/${type}/${params.row.id}`}>
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
        <Link to={`/${type}/new`}>إضافة جديد</Link>
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
