import { createSlice } from "@reduxjs/toolkit";

const billSlice = createSlice({
  name: "product",
  initialState: [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ],
  reducers: {},
});

export default billSlice.reducer;

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
