import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {},
});

// export const {} = userSlice.actions;
export default userSlice.reducer;

// LIST
export const userColumns = [
  {
    field: "name",
    headerName: "العضوة",
    width: 250,
    renderCell: (params) => (
      <div className="cellWithImg">
        <div className="imgContainer">
          <img src={params.row.image} alt="avatar" className="cellImg" />
          {/* <div className={`status ${params.row.loggedIn}`}></div> */}
        </div>
        {params.row.name}
      </div>
    ),
  },
  {
    field: "bills",
    headerName: "عدد المشتريات",
    width: 150,
    renderCell: (params) => <>{params.row.bills.length}</>,
  },
];

// NEW
export const userInputs = [
  {
    id: "name",
    label: "اسم المتسخدم",
    type: "text",
  },
  {
    id: "email",
    label: "البرييد الإلكتروني",
    type: "email",
  },
  {
    id: "password",
    label: "كلمة السر",
    type: "password",
  },
];
