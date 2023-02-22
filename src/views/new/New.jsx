import React, { useState } from "react";
import "./new.scss";
// Component
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// MUI
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
// ROUTE
import { useLocation } from "react-router-dom";
// CRUD
import { AddUser } from "../../app/user/userCRUD";

export default function New({ title, inputs }) {
  // HOCKS
  const [item, setItem] = useState({});
  const location = useLocation();

  const onChange = (e) => {
    setItem({
      ...item,
      [e.target.id]:
        e.target.id === "image" ? e.target.files[0] : e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    switch (location.pathname) {
      // USER
      case "/users/new":
        AddUser(item);
        break;
      // BILL
      case "/bills/new":
        break;
      // PRODUCT
      case "/products/new":
        break;
      default:
        break;
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <img
              src={
                item.image
                  ? URL.createObjectURL(item.image)
                  : require("../../assets/noImage.png")
              }
              alt="avatar"
              className="img"
            />
          </div>
          <div className="left">
            <form onSubmit={submit}>
              <div className="inputGroup">
                <label htmlFor="image" className="image">
                  إضافة صورة
                  <AddPhotoAlternateIcon />
                </label>
                <input
                  type="file"
                  id="image"
                  style={{ display: "none" }}
                  onChange={onChange}
                />
              </div>

              {inputs.map((input) => (
                <div className="inputGroup" key={input.id}>
                  <label htmlFor={input.id}>{input.label}</label>
                  <input type={input.type} id={input.id} onChange={onChange} />
                </div>
              ))}

              <button type="submit" className="primary add">
                إضافة
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
