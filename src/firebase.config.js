import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc4uYk1vjdKLMiuchJkp3uooYvBRkl5HQ",
  authDomain: "zolomart-6ac88.firebaseapp.com",
  projectId: "zolomart-6ac88",
  storageBucket: "zolomart-6ac88.appspot.com",
  messagingSenderId: "617159996182",
  appId: "1:617159996182:web:ccd9e08df065d06fa21637"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
