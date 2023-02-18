import { createSlice } from "@reduxjs/toolkit";

const billSlice = createSlice({
  name: "product",
  initialState: [
    {
      id: 1,
      date: "4/11/2022",
      image: "",
      user: "ماما",
      amount: 105.89,
      bayFrom: "SHEIN",
    },
    {
      id: 2,
      date: "4/11/2022",
      image: "",
      user: "رغد الجبر",
      amount: 89.45,
      bayFrom: "SHEIN",
    },
  ],
  reducers: {},
});

export default billSlice.reducer;

// LIST
export const billColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "date", headerName: "تاريخ الفاتورة", width: 150 },
  {
    field: "user",
    headerName: "صاحب الفاتورة",
    width: 150,
    renderCell: (params) => (
      <div className="cellWithImg">
        <div className="imgContainer">
          <img src={params.row.iamge} alt="avatar" className="cellImg" />
        </div>
        {params.row.user}
      </div>
    ),
  },
  {
    field: "amount",
    headerName: "المبلغ",
    width: 150,
    renderCell: (params) => <div>{params.row.amount} ريال</div>,
  },
  { field: "bayFrom", headerName: "جهة الشراء", width: 150 },
];

// NEW
export const billInputs = [
  {
    id: "date",
    label: "التاريخ",
    type: "date",
  },
  {
    id: "amount",
    label: "المبلغ",
    type: "text",
  },
  {
    id: "bayFrom",
    label: "جهة الشراء",
    type: "text",
  },
];
