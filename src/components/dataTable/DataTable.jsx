import React from "react";
import "./dataTable.scss";
// MUI
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({ rows, columns }) {
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
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}
