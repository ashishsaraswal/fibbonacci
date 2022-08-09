// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtba6WZ0BaO4HhUNbWtt282yaZzbDznzQ",
  authDomain: "logindemo-2c8c4.firebaseapp.com",
  projectId: "logindemo-2c8c4",
  storageBucket: "logindemo-2c8c4.appspot.com",
  messagingSenderId: "898752796085",
  appId: "1:898752796085:web:3256cdd1f55ae7d7ce75fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
