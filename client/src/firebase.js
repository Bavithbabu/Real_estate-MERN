// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    apiKey: "AIzaSyC0PTxDnk1AitncbEPK6oH7oc2zIAk_N_c",
    authDomain: "mern-bbstate2.firebaseapp.com",
  projectId: "mern-bbstate2",
  storageBucket: "mern-bbstate2.firebasestorage.app",
  messagingSenderId: "820561781794",
  appId: "1:820561781794:web:3834ad7290e41bb65a567b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);