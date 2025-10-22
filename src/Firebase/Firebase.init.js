// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqDj9RktP3JPjZlQG67Wjk58iUXHDcUZI",
  authDomain: "warm-paws-95833.firebaseapp.com",
  projectId: "warm-paws-95833",
  storageBucket: "warm-paws-95833.firebasestorage.app",
  messagingSenderId: "785678162475",
  appId: "1:785678162475:web:5b68ac8baef660b4bde86e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);