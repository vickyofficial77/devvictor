// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1tIDU-fB4vgtAGx4R8hTMZXRVF6ZypZo",
  authDomain: "devvictor-74c8c.firebaseapp.com",
  projectId: "devvictor-74c8c",
  storageBucket: "devvictor-74c8c.firebasestorage.app",
  messagingSenderId: "1024093309704",
  appId: "1:1024093309704:web:9d52cb557b9daf47d7fabd",
  measurementId: "G-1YSJQQ3GJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);