import { db } from "../../config/firebase.config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
// // STORE
// import { useDispatch } from "react-redux";
// import { userAdded } from "./userSlice";

// CREATE
export const AddUser = ({ id, user }) => {
  //   TODO: add img reference
  setDoc(doc(db, "Users", id), {
    ...user,
    bills: [],
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
