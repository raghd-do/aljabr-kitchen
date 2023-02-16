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
      <h1 className="mb-3">تسجيل دخول</h1>
      <form onSubmit={onSubmit} className="form">
        <div className="form-floating">
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="example@gmail.com"
            onChange={onChange}
          />
          <label htmlFor="email">البريد الإلكتروني</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="123456"
            onChange={onChange}
          />
          <label htmlFor="password">كلمة السر</label>
        </div>
        <button type="submit" className="btn btn-primary">
          دخول
        </button>
      </form>
      <div className="d-flex flex-row align-items-center p-3 gap-3">
        <span className="hr"></span>
        <p className="p-0 m-0">أو</p>
        <span className="hr"></span>
      </div>
      <div className="d-flex flex-row align-items-center justify-content-center gap-4">
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
      <div className="d-flex flex-row justify-content-center gap-3">
        <p>ليس لديك حساب؟</p>
        <Link to="/signup">تسجيل جديد</Link>
      </div>
    </>
  );
}
