import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/dist/query/react";
// DB
import { db } from "../config/firebase.config";
import {
  setDoc,
  doc,
  serverTimestamp,
  getDocs,
  collection,
  deleteDoc,
} from "firebase/firestore";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fakeBaseQuery(),
  refetchOnFocus: true,

  tagTypes: ["users"],

  endpoints: (build) => ({
    // CREAT
    addUser: build.mutation({
      invalidatesTags: ["users"],
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
      providesTags: ["users"],
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

    // DELETE
    deleteUser: build.mutation({
      // TODO: delete auth account (solved by admin auth but alternativly use firebase console)
      // TODO: delete [user image file] => there is extention for this
      invalidatesTags: ["users"],
      async queryFn(id) {
        try {
          deleteDoc(doc(db, "Users", id));
          return { data: "user deleted" };
        } catch (error) {
          console.log("can't delete user");
          return { error };
        }
      },
    }),
  }),
});

export const { useAddUserMutation, useGetUsersQuery, useDeleteUserMutation } =
  userApi;
