import React from "react";
import "./dataTable.scss";
// Store
import { useSelector } from "react-redux";
import { userColumns } from "../../app/userSlice";
// MUI
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable() {
  const users = useSelector((state) => state.user);

  const actionColumn = [
    {
      field: "action",
      headerName: "إجراء",
      width: 200,
      renderCell: () => (
        <div className="cellAction">
          <div className="view">عرض</div>
          <div className="delete">حذف</div>
        </div>
      ),
    },
  ];

  return (
    <div className="dataTable">
      <DataGrid
        rows={users}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}
