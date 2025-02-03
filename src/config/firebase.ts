// Import Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore Database
import { getAuth } from "firebase/auth"; // Authentication
import { getStorage } from "firebase/storage"; // Storage (for images/files)

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEgrJS62efJPS4LQ_uymSCX_ZZKCp6vAU",
  authDomain: "marwans-todo-app.firebaseapp.com",
  projectId: "marwans-todo-app",
  storageBucket: "marwans-todo-app.firebasestorage.app",
  messagingSenderId: "188304640389",
  appId: "1:188304640389:web:33d471da865992f1d65cec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app); // Firestore Database
const auth = getAuth(app); // Firebase Authentication
const storage = getStorage(app); // Cloud Storage

// Export Firebase services
export { app, db, auth, storage };
