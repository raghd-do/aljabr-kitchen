import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className="title">تسجيل دخول</h1>
      <form onSubmit={onSubmit}>
        <div className="inputGroup">
          <label htmlFor="email">البريد الإلكتروني</label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            onChange={onChange}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">كلمة السر</label>
          <input
            type="password"
            id="password"
            placeholder="123456"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="primary">
          دخول
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
        <p>ليس لديك حساب؟</p>
        <Link to="/login/new">تسجيل جديد</Link>
      </div>
    </>
  );
}
