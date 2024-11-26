// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSLJ8aRD0lD77YbjMIlmuwKVHqV_3VifA",
  authDomain: "brackets-b04a7.firebaseapp.com",
  projectId: "brackets-b04a7",
  storageBucket: "brackets-b04a7.firebasestorage.app",
  messagingSenderId: "200008998652",
  appId: "1:200008998652:web:b723119aa7a8a81bfa0179",
  measurementId: "G-FPRZZNBBB7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
