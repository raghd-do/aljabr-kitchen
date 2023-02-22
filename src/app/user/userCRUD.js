import { db } from "../../config/firebase.config";
import { collection, addDoc } from "firebase/firestore";
// STORE
import { useDispatch } from "react-redux";
import { userAdded } from "./userSlice";

// CREATE
export const AddUser = (user) => {
  addDoc(collection(db, "Users"), {
    img: "",
    name: user.name,
    email: user.email,
    password: user.password,
    bills: [],
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
