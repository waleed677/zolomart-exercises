import firebase from 'firebase/app';
import 'firebase/firestore'; // If you're using Firestore
import 'firebase/auth'; // If you're using Firebase Authentication

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBx_1PCPxRllDkfJ8c8MA54EqLWB04ChE4",
    authDomain: "zolomart.firebaseapp.com",
    databaseURL: "https://zolomart-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "zolomart",
    storageBucket: "zolomart.appspot.com",
    messagingSenderId: "362094605741",
    appId: "1:362094605741:web:a8eecf12eec93cd15fdd24"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const db = firebase.firestore();

// Export services for use in your components
export { db};
