import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./new.scss";
// Component
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// MUI
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Alert from "@mui/material/Alert";
// ROUTE
import { useLocation } from "react-router-dom";
// FIREBASE
import { auth, storage } from "../../config/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// CRUD
import { AddUser } from "../../app/user/userCRUD";

export default function New({ title, inputs }) {
  // HOCKS
  const [item, setItem] = useState({});
  const [file, setFile] = useState();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [upload, setUpload] = useState(true);
  const location = useLocation();
  const disatch = useDispatch();

  // CONTROLLED INPUTS
  const onChange = (e) => {
    setItem({
      ...item,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    const uploadFile = () => {
      // TO MAKE A UNICE NAME
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setUpload(false);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          setUpload(true);
          setError(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((DownloadURL) => {
            setItem((prev) => ({
              ...prev,
              image: DownloadURL,
            }));
            setUpload(true);
          });
        }
      );
    };
    file && uploadFile();
    setSuccess(false);
  }, [file]);

  // SUBMIT
  const submit = (e) => {
    e.preventDefault();
    // TODO: validation

    switch (location.pathname) {
      // USER
      case "/users/new":
        createUserWithEmailAndPassword(auth, item.email, item.password)
          .then((cred) => {
            disatch(AddUser({ id: cred.user.uid, user: item }));
            setItem({});
            setError([]);
            setFile();
            setSuccess(true);
          })
          .catch((err) => {
            setError(err.code);
          });
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
                file
                  ? URL.createObjectURL(file)
                  : require("../../assets/noImage.png")
              }
              alt="avatar"
              accept="image/*"
              className="img"
            />
          </div>
          <div className="left">
            <span className="alert">{error}</span>

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
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>

              {inputs.map((input) => (
                <div className="inputGroup" key={input.id}>
                  <label htmlFor={input.id}>{input.label}</label>
                  <input
                    type={input.type}
                    id={input.id}
                    className={error && "error"}
                    onChange={onChange}
                    value={item[input.id]}
                    required
                  />
                </div>
              ))}

              <button type="submit" className="primary add" disabled={!upload}>
                إضافة
              </button>
            </form>
            <div className="alert">
              {error && <Alert severity="error">{error}</Alert>}
              {success && (
                <Alert severity="success">تم إضافة المستخدم بنجاح !</Alert>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
