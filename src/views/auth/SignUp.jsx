import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>إنشاء حساب</h1>
      <form onSubmit={onSubmit}>
        <div className="form-floating">
          <input
            type="text"
            id="first_name"
            className="form-control"
            placeholder="رغد"
          />
          <label for="first_name">الاسم</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            id="last_name"
            className="form-control"
            placeholder="الجبر"
          />
          <label for="last_name">العائلة</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="example@gmail.com"
          />
          <label for="email">البريد الإلكتروني</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            id="pw"
            className="form-control"
            placeholder="123456"
          />
          <label for="pw">كلمة السر</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            id="cpw"
            className="form-control"
            placeholder="123456"
          />
          <label for="cpw">تأكيد كلمة السر</label>
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
