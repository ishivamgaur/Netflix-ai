// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA00tmAWDRy9fMHBjthTXnyvcpZjckTKyA",
  authDomain: "netflix-gpt-shivam.firebaseapp.com",
  projectId: "netflix-gpt-shivam",
  storageBucket: "netflix-gpt-shivam.firebasestorage.app",
  messagingSenderId: "820951375699",
  appId: "1:820951375699:web:d10f1291b591e1e88f0ba6",
  measurementId: "G-WZ0JW58LLW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//! Auth
export const auth = getAuth();
