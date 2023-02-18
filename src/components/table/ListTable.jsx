import React from "react";
import "./listTable.scss";
// MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function ListTable() {
  const rows = [
    {
      id: 1,
      img: "https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/30/e8/fd/30e8fdc6-3797-91f5-7d76-de5a2c8ac262/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/256x256bb.jpg",
      name: "رغد",
      date: "1/1/2022",
      amount: 220,
      bayFrom: "SHEIN",
      status: "مدفوع",
    },
    {
      id: 2,
      img: "https://techcrunch.com/wp-content/uploads/2022/01/GettyImages-1308797233.jpg",
      name: "صفية",
      date: "2/1/2022",
      amount: 103,
      bayFrom: "SHEIN",
      status: "انتظار",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">صاحبة الفاتورة</TableCell>
            <TableCell className="tableCell">التاريخ</TableCell>
            <TableCell className="tableCell">المبلغ</TableCell>
            <TableCell className="tableCell">جهة الشراء</TableCell>
            <TableCell className="tableCell">حالة الطلب</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row" className="tableCell">
                {row.id}
              </TableCell>
              <TableCell className="tableCell">
                <div className="wrapper">
                  <img src={row.img} alt="" className="img" />
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount} ريال</TableCell>
              <TableCell className="tableCell">{row.bayFrom}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
