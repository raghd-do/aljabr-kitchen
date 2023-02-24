import React, { useEffect, useState } from "react";
import "./new.scss";
// Component
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// MUI
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Alert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";
// ROUTE
import { useLocation, useNavigate } from "react-router-dom";
// FIREBASE
import { auth, storage } from "../../config/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// API
import { useAddUserMutation } from "../../app/user/UserApi";

export default function New({ title, inputs }) {
  // HOCKS
  const [item, setItem] = useState({});
  const [file, setFile] = useState("");
  const [error, setError] = useState("");
  const [upload, setUpload] = useState(null);
  const location = useLocation();
  const [addUser] = useAddUserMutation();
  const navigate = useNavigate();

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
          setUpload(progress);
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
          setUpload(null);
          setError(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((DownloadURL) => {
            setItem((prev) => ({
              ...prev,
              image: DownloadURL,
            }));
            setUpload(null);
          });
        }
      );
    };
    file && uploadFile();
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
            addUser({ id: cred.user.uid, user: item });
            navigate("/users");
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
            {upload != null && (
              <LinearProgress
                variant="determinate"
                value={upload}
                color="inherit"
              />
            )}

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
                  required
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
                    // value={item[input.id]}
                    required
                  />
                </div>
              ))}

              <button
                type="submit"
                className="primary add"
                disabled={upload !== null && upload < 100}
              >
                إضافة
              </button>
            </form>
            <div className="alert">
              {error && <Alert severity="error">{error}</Alert>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
