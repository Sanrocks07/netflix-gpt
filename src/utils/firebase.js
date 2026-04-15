// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0fe3rdNbPJLsQX0EXQTC-l-Q4F_EnexI",
  authDomain: "netflixgpt-a64f8.firebaseapp.com",
  projectId: "netflixgpt-a64f8",
  storageBucket: "netflixgpt-a64f8.firebasestorage.app",
  messagingSenderId: "720798364361",
  appId: "1:720798364361:web:20d3d5ba1aec9b259fd318",
  measurementId: "G-LNCF7GVYJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);