import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { db } from "../../config/firebase.config";
import {
  setDoc,
  doc,
  serverTimestamp,
  getDocs,
  collection,
} from "firebase/firestore";

export const UserApi = createApi({
  reducerPath: "userApi",
  baseQuery: fakeBaseQuery(),

  endpoints: (build) => ({
    // CREAT
    addUser: build.mutation({
      queryFn({ id, user }) {
        setDoc(doc(db, "Users", id), {
          image: user.image,
          name: user.name,
          email: user.email,
          bills: [],
          created: serverTimestamp(),
          updated: serverTimestamp(),
        })
          .then(() => {
            console.log("user added");
            return { data: "user added" };
          })
          .catch((error) => {
            console.log(error);
            return { error };
          });
        return { data: "ok" };
      },
    }),
    // READ - ALL
    getUsers: build.query({
      async queryFn() {
        try {
          const query = await getDocs(collection(db, "Users"));
          let users = [];
          query.forEach((doc) => {
            users.push({ id: doc.id, ...doc.data() });
          });
          return { data: users };
        } catch (error) {
          console.log(error);
          return { error };
        }
      },
    }),
  }),
});

export const { useAddUserMutation, useGetUsersQuery } = UserApi;
