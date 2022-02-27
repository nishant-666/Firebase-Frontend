// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHn-YeVCTsVHypQdEs84t5cHA0rKn0zRo",
  authDomain: "fir-frontend-82e73.firebaseapp.com",
  projectId: "fir-frontend-82e73",
  storageBucket: "fir-frontend-82e73.appspot.com",
  messagingSenderId: "898957714679",
  appId: "1:898957714679:web:fd8243de90b4d827025ff2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);