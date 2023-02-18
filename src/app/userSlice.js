import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [
    {
      id: 1,
      name: "رغد الجبر",
      img: "https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/30/e8/fd/30e8fdc6-3797-91f5-7d76-de5a2c8ac262/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/256x256bb.jpg",
      payments: 4,
      loggedIn: false,
    },
    {
      id: 2,
      name: "صفية الجبر",
      img: "https://techcrunch.com/wp-content/uploads/2022/01/GettyImages-1308797233.jpg",
      payments: 3,
      loggedIn: true,
    },
  ],
  reducers: {},
});

export default userSlice.reducer;

// LIST
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "العضوة",
    width: 230,
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
  { field: "payments", headerName: "عدد المشتريات", width: 90 },
];

// NEW
export const userInputs = [
  {
    id: "userName",
    label: "اسم المتسخدم",
    type: "text",
  },
  {
    id: "userEmail",
    label: "البرييد الإلكتروني",
    type: "email",
  },
  {
    id: "userPassword",
    label: "كلمة السر",
    type: "password",
  },
];
