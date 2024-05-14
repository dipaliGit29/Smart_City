// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const API_KEY=import.meta.env.VITE_Firebase_API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "smartcity-2443d.firebaseapp.com",
  projectId: "smartcity-2443d",
  storageBucket: "smartcity-2443d.appspot.com",
  messagingSenderId: "539626187131",
  appId: "1:539626187131:web:a7a1b4d5b3410e3708f5de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
