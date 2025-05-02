// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCcARdDzT8biOT0NzwuYdmq99tXFtNa3g",
  authDomain: "portfolio-8369c.firebaseapp.com",
  projectId: "portfolio-8369c",
  storageBucket: "portfolio-8369c.firebasestorage.app",
  messagingSenderId: "964813306137",
  appId: "1:964813306137:web:ce0546421fb75c91f02d88",
  measurementId: "G-MS4069T29T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);