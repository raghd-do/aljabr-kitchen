import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    cpw: "",
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setState({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      cpw: "",
    });
  };

  return (
    <>
      <h1 className="title">إنشاء حساب</h1>
      <form onSubmit={onSubmit}>
        <div className="group">
          <div className="inputGroup">
            <label htmlFor="first_name">الاسم</label>
            <input
              type="text"
              id="first_name"
              placeholder="رغد"
              onChange={onChange}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="last_name">العائلة</label>
            <input
              type="text"
              id="last_name"
              placeholder="الجبر"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="inputGroup">
          <label htmlFor="email">البريد الإلكتروني</label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            onChange={onChange}
          />
        </div>
        <div className="group">
          <div className="inputGroup">
            <label htmlFor="password">كلمة السر</label>
            <input
              type="password"
              id="password"
              placeholder="123456"
              onChange={onChange}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="cpw">تأكيد كلمة السر</label>
            <input
              type="password"
              id="cpw"
              placeholder="123456"
              onChange={onChange}
            />
          </div>
        </div>
        <button type="submit" className="primary">
          تسجيل
        </button>
      </form>

      <div className="bottom">
        <div className="devider">
          <span></span>
          <p>أو</p>
          <span></span>
        </div>
        <div className="accounts">
          <img
            src={require("../../assets/facebook.png")}
            alt="facebook"
            className="logo"
          />
          <img
            src={require("../../assets/twitter.png")}
            alt="twitter"
            className="logo"
          />
          <img
            src={require("../../assets/google.png")}
            alt="google"
            className="logo"
          />
        </div>
      </div>
      <div className="otherLog">
        <p>لديك حساب فعلا؟</p>
        <Link to="/login">تسجيل دخول</Link>
      </div>
    </>
  );
}
