// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Optional: Import Firebase services as needed (e.g., analytics, firestore)
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCL70v5ili40AoVMxFvypT8DtlSbKFIafk",
  authDomain: "gudskytest.firebaseapp.com",
  projectId: "gudskytest",
  storageBucket: "gudskytest.firebasestorage.app",
  messagingSenderId: "908353069712",
  appId: "1:908353069712:web:8e16e0f67e781742dc2e15",
  measurementId: "G-79QGR1YWXK",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

export { app };
