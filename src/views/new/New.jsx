import React, { useState } from "react";
import "./new.scss";
// Component
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// MUI
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

export default function New({ title, inputs }) {
  const [item, setItem] = useState({});

  // const [image, setImage] =

  const onChange = (e) => {
    console.log(e.target.id);
    console.log(e.target.value);
    setItem({
      ...item,
      [e.target.id]:
        e.target.id === "image" ? e.target.files[0] : e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
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
                  <input type={input.type} id={input.id} />
                </div>
              ))}

              <button type="submit" className="add">
                إضافة
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
