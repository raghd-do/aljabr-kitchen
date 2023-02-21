import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// AUTH
import { getAuth } from "firebase/auth";
// DB
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "budget-5f387.firebaseapp.com",
  projectId: "budget-5f387",
  storageBucket: "budget-5f387.appspot.com",
  messagingSenderId: "284916075879",
  appId: "1:284916075879:web:5a421bd5b9c4ae6ad3b3c2",
  measurementId: "G-NRV6L4FMRL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Serveses
export const auth = getAuth();
export const db = getFirestore();

export const analytics = getAnalytics(app);
