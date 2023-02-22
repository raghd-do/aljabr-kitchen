import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    userAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { userAdded } = userSlice.actions;
export default userSlice.reducer;

// LIST
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "العضوة",
    width: 250,
    renderCell: (params) => (
      <div className="cellWithImg">
        <div className="imgContainer">
          <img src={params.row.img} alt="avatar" className="cellImg" />
          <div className={`status ${params.row.loggedIn}`}></div>
        </div>
        {params.row.name}
      </div>
    ),
  },
  { field: "payments", headerName: "عدد المشتريات", width: 150 },
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
