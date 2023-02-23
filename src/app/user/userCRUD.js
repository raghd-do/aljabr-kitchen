import { db } from "../../config/firebase.config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
// // STORE
// import { useDispatch } from "react-redux";

// CREATE
export const AddUser = ({ id, user }) => {
  setDoc(doc(db, "Users", id), {
    img: user.image,
    name: user.name,
    email: user.email,
    bills: [],
    created: serverTimestamp(),
    updated: serverTimestamp(),
  });
};
