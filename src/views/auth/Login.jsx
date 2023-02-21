import React, { useState } from "react";
// FIREBASE
import { auth } from "../../config/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
// STORE
import { useDispatch } from "react-redux";
import { authIn } from "../../app/authSlice";
// ROUTER
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // HOCKS
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // CONTROLLED INPUTS
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  // SUBMIT
  const onSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, state.email, state.password)
      .then((cred) => {
        setState({
          email: "",
          password: "",
        });
        setError({
          email: "",
          password: "",
        });

        dispatch(authIn());
        navigate("/");
      })
      .catch((err) => {
        console.log(err.code);
        switch (err.code) {
          case "auth/user-not-found":
            setError({
              email: err.code,
              password: "",
            });
            break;

          case "auth/wrong-password":
            setError({
              email: "",
              password: err.code,
            });
            break;

          default:
            setError({
              email: "",
              password: "",
            });
            break;
        }
      });
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
            className={error.email && "error"}
            placeholder="example@gmail.com"
            onChange={onChange}
            value={state.email}
          />
          {error.email && <span className="alert">{error.email}</span>}
        </div>
        <div className="inputGroup">
          <label htmlFor="password">كلمة السر</label>
          <input
            type="password"
            id="password"
            className={error.password && "error"}
            onChange={onChange}
            value={state.password}
          />
          {error.password && <span className="alert">{error.password}</span>}
        </div>
        {/* {error && (
          <span className="alert">خطأ في البريد الإلكتروني أو كلمة السر</span>
        )} */}
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
