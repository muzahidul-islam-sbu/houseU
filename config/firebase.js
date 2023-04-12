// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnbf6bJWrS4oLXsOGLbfbdyaQpSE3XjSY",
  authDomain: "house-u.firebaseapp.com",
  projectId: "house-u",
  storageBucket: "house-u.appspot.com",
  messagingSenderId: "420932908753",
  appId: "1:420932908753:web:a736e694de716e53c837f0",
  measurementId: "G-JYHBDNHE9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);