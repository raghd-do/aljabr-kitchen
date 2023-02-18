import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [
    {
      id: 1,
      name: "فوط صحية",
      desc: "lorem ipsom",
      prise: 200,
      category: "العناية الصحية",
      stock: 1,
    },
    {
      id: 2,
      name: "فرش أسنان",
      desc: "lorem ipsom",
      prise: 25,
      category: "العناية الصحية",
      stock: 4,
    },
  ],
  reducers: {},
});

export default productSlice.reducer;

// LIST
export const productColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "اسم المنتج", width: 150 },
  {
    field: "prise",
    headerName: "المبلغ",
    width: 150,
    renderCell: (params) => <div>{params.row.prise} ريال</div>,
  },
  { field: "category", headerName: "التصنيف", width: 150 },
  { field: "stock", headerName: "المخزون", width: 150 },
];

// NEW
export const productInputs = [
  {
    id: "tilte",
    label: "اسم المنتج",
    type: "text",
  },
  {
    id: "description",
    label: "الوصف",
    type: "text",
  },
  {
    id: "category",
    label: "التصنيف",
    type: "text",
  },
  {
    id: "prise",
    label: "السعر",
    type: "text",
  },
  {
    id: "stock",
    label: "المخزون",
    type: "text",
  },
];
