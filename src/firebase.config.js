import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
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

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

