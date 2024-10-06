// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCukoU1hBMoTtUFdcUqCHuRJnlHH8OcDQw",
  authDomain: "edulearning-61ffe.firebaseapp.com",
  projectId: "edulearning-61ffe",
  storageBucket: "edulearning-61ffe.appspot.com",
  messagingSenderId: "808015495644",
  appId: "1:808015495644:web:56ccd114f14205b8c80f19",
  measurementId: "G-3GKZGXSPDP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
