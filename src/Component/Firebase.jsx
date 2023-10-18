

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDas0jvfqW_RF8SJjM-YN7s3hcqmBVo0LE",
  authDomain: "e-commerce1-21c8a.firebaseapp.com",
  projectId: "e-commerce1-21c8a",
  storageBucket: "e-commerce1-21c8a.appspot.com",
  messagingSenderId: "229696652675",
  appId: "1:229696652675:web:5dc06ba6af668909b8a2b6",
  measurementId: "G-6FE5XZHMSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const fireStoor = getFirestore(app)

export {auth, fireStoor}
