import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerByEmail } from "../../app/authSlice";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

    dispatch(registerByEmail({ email: state.email, password: state.password }));

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
      <h1 className="mb-3">إنشاء حساب</h1>
      <form onSubmit={onSubmit} className="form">
        <div className="form-floating">
          <input
            type="text"
            id="first_name"
            className="form-control"
            placeholder="رغد"
            onChange={onChange}
          />
          <label htmlFor="first_name">الاسم</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            id="last_name"
            className="form-control"
            placeholder="الجبر"
            onChange={onChange}
          />
          <label htmlFor="last_name">العائلة</label>
        </div>
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
        <div className="form-floating">
          <input
            type="password"
            id="cpw"
            className="form-control"
            placeholder="123456"
            onChange={onChange}
          />
          <label htmlFor="cpw">تأكيد كلمة السر</label>
        </div>
        <button type="submit" className="btn btn-primary">
          تسجيل
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
        <p>لديك حساب فعلا؟</p>
        <Link to="/login">تسجيل دخول</Link>
      </div>
    </>
  );
}
