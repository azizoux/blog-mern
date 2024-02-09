// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-mern-aziz.firebaseapp.com",
  projectId: "blog-mern-aziz",
  storageBucket: "blog-mern-aziz.appspot.com",
  messagingSenderId: "624038322243",
  appId: "1:624038322243:web:fb13ed28e35921d4fd74f6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
