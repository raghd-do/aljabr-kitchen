import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
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

export default productSlice.reducer;

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
