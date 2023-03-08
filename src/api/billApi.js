import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/dist/query/react";
// DB
import { db } from "../config/firebase.config";
import {
  serverTimestamp,
  doc,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
} from "firebase/firestore";

export const billApi = createApi({
  reducerPath: "billApi",
  baseQuery: fakeBaseQuery(),
  refetchOnFocus: true,

  tagTypes: ["bills"],

  endpoints: (build) => ({
    // CREAT
    addBill: build.mutation({
      invalidatesTags: ["bills"],
      queryFn({ bill, user }) {
        addDoc(collection(db, "Bills"), {
          image: user.image,
          user: user.id,
          date: bill.date,
          amount: bill.amount,
          boughtFrom: bill.boughtFrom,
          created: serverTimestamp(),
          updated: serverTimestamp(),
        })
          .then(() => {
            console.log("bill added");
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
    getBills: build.query({
      providesTags: ["bills"],
      async queryFn() {
        try {
          const query = await getDocs(collection(db, "Bills"));
          let bills = [];
          query.forEach((doc) => {
            bills.push({ id: doc.id, ...doc.data() });
          });
          return { data: bills };
        } catch (error) {
          console.log(error);
          return { error };
        }
      },
    }),

    // READ - ONE
    getBill: build.query({
      async queryFn(id) {
        try {
          const bill = await getDoc(doc(db, "Bills", id));
          return { data: bill };
        } catch (error) {
          console.log(error);
          return { error };
        }
      },
    }),

    // DELETE
    deleteBill: build.mutation({
      invalidatesTags: ["bills"],
      async queryFn(id) {
        try {
          deleteDoc(doc(db, "Bills", id));
          return { data: "bill deleted" };
        } catch (error) {
          console.log("can't delete bill");
          return { error };
        }
      },
    }),
  }),
});

export const {
  useAddBillMutation, // C
  useGetBillsQuery, // R- a
  useGetBillQuery, // R - o
  useDeleteBillMutation, // D
} = billApi;
